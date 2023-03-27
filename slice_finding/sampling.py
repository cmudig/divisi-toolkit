import numpy as np
import pandas as pd
from .utils import RankedList, make_mask
from .slices import Slice, RankedSliceList
import tqdm
from scipy import sparse as sps
from numba import njit, prange
from multiprocessing import Process, Pipe
import time

@njit
def tabulate_score_inputs_matrix(discrete_data, score_data, hist_sizes, filter_row, anchor_row):
    """
    Calculates the sum, histogram, and count of each column in
    score_data that satisfy each possible slice created by
    adding a feature to filter_row.
    
    :param discrete_data: A 2D numpy array containing discrete
        feature inputs. Each column must contain integers ranging from
        0 to some number n.
    :param score_data: A 2D numpy array where each column is a
        score vector, with the same number of rows as discrete_data
    :param hist_sizes: A vector providing the maximum value for each
        column in score_data. A value of zero means no histogram will
        be computed for that column; histograms can only be computed
        for discrete-valued score data (integers from 0 to hist_size)
    :param filter_row: A vector with the same number of elements
        as the columns of discrete_data, where positions that are
        1 MUST match the anchor row in order for the row to be
        considered. MUST be a boolean array
    :param anchor_row: Vector of the same shape as filter_row,
        containing values that the rows of discrete_data will be
        tested for equality against
        
    :return: A tuple (sums, hists, counts), where each is a 3D array
        with the first dimension equal to the number of columns in
        score_data, the second dimension is the number of columns in
        discrete_data, and the third is (1, max(hist_sizes), 1)
    """
    sums = np.zeros((score_data.shape[1], discrete_data.shape[1], 1))
    hists = np.zeros((score_data.shape[1], discrete_data.shape[1], np.max(hist_sizes)), dtype=np.int32)
    counts = np.zeros((score_data.shape[1], discrete_data.shape[1], 1), dtype=np.int32)
    
    hist_able_mask = hist_sizes > 0
    hist_indexes = np.argwhere(hist_able_mask).flatten()
    hist_able_scores = score_data[:,hist_able_mask].astype(np.uint16)
    
    for i in prange(discrete_data.shape[0]):
        # Check if row i matches filter_row
        test_row = discrete_data[i]
        valid = True
        for idx in filter_row:
            if test_row[idx] != anchor_row[idx]:
                valid = False
                break
        if not valid: continue
        
        for col in range(discrete_data.shape[1]):
            if test_row[col] == anchor_row[col]:
                for j in range(hist_able_scores.shape[1]):
                    hists[hist_indexes[j], col, hist_able_scores[i,j]] += 1

                sums[:,col,0] += score_data[i]
                counts[:,col,0] += 1
        
    return sums, hists, counts

@njit
def tabulate_score_inputs_sparse(data, i_data, j_data, n_cols, score_data, hist_sizes, filter_row, anchor_row):
    """
    Calculates the sum, histogram, and count of each column in
    score_data that satisfy each possible slice created by
    adding a feature to filter_row.
    
    :param data: A sparse matrix containing discrete
        feature inputs. Each column must contain integers ranging from
        0 to some number n.
    :param score_data: A 2D numpy array where each column is a
        score vector, with the same number of rows as discrete_data
    :param hist_sizes: A vector providing the maximum value for each
        column in score_data. A value of zero means no histogram will
        be computed for that column; histograms can only be computed
        for discrete-valued score data (integers from 0 to hist_size)
    :param filter_row: A vector with the same number of elements
        as the columns of discrete_data, where positions that are
        1 MUST match the anchor row in order for the row to be
        considered. MUST be a sorted list of column indexes
    :param anchor_row: Vector of the same shape as filter_row,
        containing values that the rows of discrete_data will be
        tested for equality against
        
    :return: A tuple (sums, hists, counts), where each is a 3D array
        with the first dimension equal to the number of columns in
        score_data, the second dimension is the number of columns in
        discrete_data, and the third is (1, max(hist_sizes), 1)
    """
    
    sums = np.zeros((score_data.shape[1], n_cols, 1))
    hists = np.zeros((score_data.shape[1], n_cols, np.max(hist_sizes)), dtype=np.int32)
    counts = np.zeros((score_data.shape[1], n_cols, 1), dtype=np.int32)
    
    hist_able_mask = hist_sizes > 0
    hist_indexes = np.argwhere(hist_able_mask).flatten()
    hist_able_scores = score_data[:,hist_able_mask].astype(np.uint16)
    
    for i in prange(len(i_data) - 1):
        # Check if row i matches filter_row
        filled_cols = j_data[i_data[i]:i_data[i + 1]]
        found_pos = 0
        for idx in filled_cols:
            if idx == filter_row[found_pos]:
                found_pos += 1
                if found_pos == len(filter_row): break
            elif idx > filter_row[found_pos]: break
        if found_pos != len(filter_row): continue
        
        for col in filled_cols:
            if not anchor_row[col]: continue

            for j in range(hist_able_scores.shape[1]):
                hists[hist_indexes[j], col, hist_able_scores[i,j]] += 1

            sums[:,col,0] += score_data[i]
            counts[:,col,0] += 1

    return sums, hists, counts

def slice_scoring_worker(inputs, score_data, hist_sizes, query_conn):
    """
    Handles scoring a set of slices on a given subset of data, in either numpy
    array or scipy csc format.
    
    :param inputs: A numpy array or scipy csc sparse array containing discrete
        inputs
    :param score_data: A numpy array of score data to use to calculate sums,
        counts, histograms, etc.
    :param hist_sizes: A vector providing the maximum value for each
        column in score_data. A value of zero means no histogram will
        be computed for that column; histograms can only be computed
        for discrete-valued score data (integers from 0 to hist_size)
    :param query_conn: A multiprocessing Connection (e.g. from a Pipe) that
        can be used to receive task inputs and send results. The inputs should
        be of the form (base_slice, source_row, cols_to_score) where base_slice
        is a dict of col-index/value pairs, source_row is an indexable object
        representing values that should be filtered for in considered slices,
        and cols_to_score is a list of integers representing which columns to
        consider adding to the slice. The output will be a tuple (sums, hists,
        counts) where each is a 3D array where the first dimension = score data
        columns, second dimension = input columns (zeros where an index was not
        included in cols_to_score), and the third dimension is max of hist_sizes
        for hists and 1 for others.
    """
            
    univariate_masks = {}
    
    while True:
        task = query_conn.recv()
        if task == "STOP": return
        base_slice, source_row, cols_to_score = task
        base_slice = Slice(base_slice)
        base_mask = make_mask(inputs, base_slice, univariate_masks=univariate_masks)
        
        sums = np.zeros((score_data.shape[1], inputs.shape[1], 1))
        hists = np.zeros((score_data.shape[1], inputs.shape[1], np.max(hist_sizes)), dtype=np.int32)
        counts = np.zeros((score_data.shape[1], inputs.shape[1], 1), dtype=np.int32)
        
        hist_able_mask = hist_sizes > 0
        hist_indexes = np.argwhere(hist_able_mask).flatten()
        hist_able_scores = score_data[:,hist_able_mask].astype(np.uint16)
    
        # Enumerate columns to score
        for i in cols_to_score:
            mask = make_mask(inputs, base_slice.subslice(i, source_row[i]), existing_mask=base_mask, univariate_masks=univariate_masks)
            sums[:,i,0] = score_data[mask].sum(axis=0)
            counts[:,i,0] = mask.sum()
            for j, hist_idx in enumerate(hist_indexes):
                # print(j, i, hist_able_scores[mask, j].shape, hists.shape)
                hists[np.ix_([hist_idx], [i], hist_able_scores[mask, j])] += 1
            
        query_conn.send((sums, hists, counts))
    

def explore_groups_beam_search_multi(inputs, 
                                     source_row, 
                                     score_fns, 
                                     score_fn_order,
                                     score_data,
                                     hist_sizes,
                                     seen_slices, 
                                     pipes,
                                     group_filter=None, 
                                     positive_only=None,
                                     max_features=5, 
                                     min_items=5, 
                                     min_weight=0.0, 
                                     max_weight=5.0, 
                                     num_candidates=20):
    """
    Version of explore_groups_beam_search that uses a set of multiprocessing
    Processes to distribute slice scoring.
    """
    scored_slices = set()
    if num_candidates is not None:
        # Maintain a ranking for each function separately, as different slices may
        # maximize different functions
        best_groups = {fn_name: RankedList(num_candidates, [(Slice({}, {}), -1e9)]) 
                        for fn_name in score_fns}
    else:
        best_groups = set([Slice({}, {})])

    if isinstance(inputs, sps.csr_matrix):
        if inputs.max() > 1:
            raise ValueError("Sparse matrices must be binary")
        if positive_only == False:
            raise ValueError("positive_only must be True or None for sparse matrices")
        d = sps.lil_matrix((inputs.shape[1], inputs.shape[1]))
        source_row = source_row.toarray().flatten()
        d.setdiag(source_row)
        mat_for_masks = (inputs @ d).tocsc()
        positive_only = True
    else:
        mat_for_masks = inputs
        
    try:
        input_columns = mat_for_masks.columns
    except AttributeError:
        input_columns = np.arange(mat_for_masks.shape[1])
    
    univariate_masks = {}

    time_scoring_slices = 0.0
    num_base_slices = 0
    # Iterate over the columns max_features times
    for col_size in range(max_features):
        if num_candidates is not None:
            saved_groups = set([g for _, gset in best_groups.items() for g in gset.items])
        else:
            saved_groups = set(g for g in best_groups)
        
        # TODO send tasks from multiple base slices asynchronously then retrieve them
        for base_slice in saved_groups:
            cols_to_score = []
            slice_expansions = {}
            for i, col in enumerate(input_columns):
                # Skip if only slicing using positive values and the row has a negative value
                if positive_only and not source_row[col]: continue
                # Skip if we've already looked at this column
                if col in base_slice and base_slice[col] == source_row[col]: continue
                
                new_slice = base_slice.subslice(col, source_row[col])
                
                # Skip if the user wants to filter this slice out
                if new_slice in seen_slices and len(new_slice.feature_values) == max_features:
                    continue
                if new_slice in scored_slices: 
                    continue
                if group_filter is not None and not group_filter(new_slice): 
                    continue

                if new_slice in seen_slices:
                    # Retrieve existing scores
                    slice_scores = seen_slices[new_slice]
                    if not slice_scores: continue
                    new_slice.score_values = slice_scores
                    slice_expansions[new_slice] = slice_scores
                else:
                    cols_to_score.append(i)
                            
            if isinstance(inputs, pd.DataFrame):
                index_slice = {inputs.columns.get_loc(k): v for k, v in base_slice.feature_values.items()}
            else:
                index_slice = base_slice.feature_values
            
            a = time.time()
            for p in pipes:
                p[0].send((index_slice, source_row, cols_to_score))
            sums = np.zeros((score_data.shape[1], inputs.shape[1], 1))
            hists = np.zeros((score_data.shape[1], inputs.shape[1], np.max(hist_sizes)), dtype=np.int32)
            counts = np.zeros((score_data.shape[1], inputs.shape[1], 1), dtype=np.int32)
            for p in pipes:
                sums_batch, hists_batch, counts_batch = p[0].recv()
                sums += sums_batch
                hists += hists_batch
                counts += counts_batch
            time_scoring_slices += (time.time() - a)
            num_base_slices += 1
                
            for i in cols_to_score:
                col = input_columns[i]
                new_slice = base_slice.subslice(col, source_row[col])
                
                # Generate a mask for the slice and score it
                if counts.shape[1] > 0 and counts[0,i,0] < min_items: 
                    seen_slices[new_slice] = None
                    continue

                itemized_masks = [make_mask(mat_for_masks, Slice({c: v}), univariate_masks=univariate_masks)
                                  for (c, v) in new_slice.feature_values.items()]
                for j, key in enumerate(score_fn_order):
                    new_slice.score_values[key] = score_fns[key].calculate_score_fast(new_slice,
                                                                                        sums[j,i,0],
                                                                                        hists[j,i,:],
                                                                                        counts[j,i,0],
                                                                                        inputs.shape[0],
                                                                                        itemized_masks)

                scored_slices.add(new_slice)
                slice_expansions[new_slice] = new_slice.score_values
                seen_slices[new_slice] = new_slice.score_values
                if len(seen_slices) % 10000 == 0: print("Seen {} groups".format(len(seen_slices)))
                
            for new_slice in slice_expansions:
                if num_candidates is not None:
                    for fn_name in score_fns:
                        # Add to each ranking the score where only the current score
                        # function's value is maximized
                        score = sum((max_weight if f == fn_name else min_weight) * new_slice.score_values[f] for f in score_fns)
                        best_groups[fn_name].add(new_slice, score)
                else:
                    best_groups.add(new_slice)

    print(time_scoring_slices / num_base_slices)
    return list(scored_slices)
            
def explore_groups_beam_search(inputs, 
                               source_row, 
                               score_fns, 
                               seen_slices, 
                               group_filter=None, 
                               positive_only=None,
                               max_features=5, 
                               min_items=5, 
                               min_weight=0.0, 
                               max_weight=5.0, 
                               num_candidates=20):
    scored_slices = set()
    if num_candidates is not None:
        # Maintain a ranking for each function separately, as different slices may
        # maximize different functions
        best_groups = {fn_name: RankedList(num_candidates, [(Slice({}, {}), -1e9)]) 
                        for fn_name in score_fns}
    else:
        best_groups = set([Slice({}, {})])

    if isinstance(inputs, sps.csr_matrix):
        if inputs.max() > 1:
            raise ValueError("Sparse matrices must be binary")
        if positive_only == False:
            raise ValueError("positive_only must be True or None for sparse matrices")
        d = sps.lil_matrix((inputs.shape[1], inputs.shape[1]))
        source_row = source_row.toarray().flatten()
        d.setdiag(source_row)
        mat_for_masks = (inputs @ d).tocsc()
        positive_only = True
    else:
        mat_for_masks = inputs
        
    try:
        input_columns = mat_for_masks.columns
    except AttributeError:
        input_columns = np.arange(mat_for_masks.shape[1])
    
    univariate_masks = {}
    
    time_scoring_slices = 0.0
    num_base_slices = 0

    # Iterate over the columns max_features times
    for col_size in range(max_features):
        if num_candidates is not None:
            saved_groups = set([g for _, gset in best_groups.items() for g in gset.items])
        else:
            saved_groups = set(g for g in best_groups)
        for base_slice in saved_groups:
            a = time.time()
            base_mask = make_mask(mat_for_masks, base_slice, univariate_masks=univariate_masks)
                
            for i, col in enumerate(input_columns):
                # Skip if only slicing using positive values and the row has a negative value
                if positive_only and not source_row[col]: continue
                # Skip if we've already looked at this column
                if col in base_slice and base_slice[col] == source_row[col]: continue
                
                new_slice = base_slice.subslice(col, source_row[col])
                
                # Skip if the user wants to filter this slice out
                if new_slice in seen_slices and len(new_slice.feature_values) == max_features:
                    continue
                if new_slice in scored_slices: 
                    continue
                if group_filter is not None and not group_filter(new_slice): 
                    continue

                if new_slice in seen_slices:
                    # Retrieve existing scores
                    slice_scores = seen_slices[new_slice]
                    if not slice_scores: continue
                    new_slice.score_values = slice_scores
                else:
                    # Generate a mask for the slice and score it
                    mask = make_mask(mat_for_masks, Slice({col: source_row[col]}), base_mask, univariate_masks=univariate_masks)
                    if mask.sum() < min_items: 
                        seen_slices[new_slice] = None
                        continue
                    itemized_masks = [univariate_masks[(c, v)] for (c, v) in new_slice.feature_values.items()]
                    for key, scorer in score_fns.items():
                        new_slice.score_values[key] = scorer.calculate_score(new_slice, mask, itemized_masks)
                    scored_slices.add(new_slice)
                
                seen_slices[new_slice] = new_slice.score_values
                if len(seen_slices) % 10000 == 0: print("Seen {} groups".format(len(seen_slices)))
                
                if num_candidates is not None:
                    for fn_name in score_fns:
                        # Add to each ranking the score where only the current score
                        # function's value is maximized
                        score = sum((max_weight if f == fn_name else min_weight) * new_slice.score_values[f] for f in score_fns)
                        best_groups[fn_name].add(new_slice, score)
                else:
                    best_groups.add(new_slice)
            time_scoring_slices += (time.time() - a)
            num_base_slices += 1

    print(time_scoring_slices / num_base_slices)

    return list(scored_slices)

class SamplingSliceFinder:
    """
    A class that finds slices by sampling input rows and expanding slices that
    contain each sample row. This class can be instantiated and used multiple
    times, while saving previously seen slices.
    """
    def __init__(self,
                 inputs, 
                 score_fns, 
                 source_mask=None, 
                 group_filter=None, 
                 max_features=3, 
                 min_items=100, 
                 num_candidates=20,
                 positive_only=None,
                 holdout_fraction=0.0,
                 min_weight=0.0,
                 max_weight=5.0,
                 similarity_threshold=0.9,
                 show_progress=True,
                 n_workers=1):
        self.inputs = inputs
        self.raw_inputs = inputs.df if hasattr(inputs, 'df') else inputs
        self.score_fns = score_fns
        self.source_mask = source_mask
        self.group_filter = group_filter
        self.max_features = max_features
        self.min_items = min_items
        self.num_candidates = num_candidates
        self.holdout_fraction = holdout_fraction
        self.min_weight = min_weight
        self.max_weight = max_weight
        self.show_progress = show_progress
        self.similarity_threshold = similarity_threshold
        self.n_workers = n_workers
        self.explore_fn = explore_groups_beam_search_multi if self.n_workers > 1 else explore_groups_beam_search
        if isinstance(self.raw_inputs, sps.csr_matrix):
            if self.raw_inputs.max() > 1:
                raise ValueError("Sparse matrices must be binary")
            if positive_only == False:
                raise ValueError("positive_only must be True or None for sparse matrices")
            self.positive_only = True
        else:
            self.positive_only = positive_only or False

        self.all_scores = []
        self.seen_slices = {}        
        self.discovery_mask = (np.random.uniform(size=self.raw_inputs.shape[0]) >= self.holdout_fraction)
        self.sampled_idxs = np.zeros(self.raw_inputs.shape[0], dtype=bool)
        self.results = None
        
    def sample(self, num_samples):
        """
        Runs the sampling slice finder for a set number of samples.
        
        :param num_samples: The number of samples to draw from the dataset
        :return: All slices found so far in a RankedSliceList object
        """
        if self.source_mask is not None:
            source_mask = (self.source_mask.values if isinstance(self.source_mask, pd.Series) else self.source_mask).copy()
            source_mask &= self.discovery_mask
        else:
            source_mask = self.discovery_mask
            
        source_mask &= ~self.sampled_idxs
        allowed_indexes = np.argwhere(source_mask).flatten()
        sample_idxs = np.random.choice(allowed_indexes, 
                                    size=min(len(allowed_indexes), num_samples), 
                                    replace=False)
        self.sampled_idxs[sample_idxs] = True
            
        bar = tqdm.tqdm(sample_idxs) if self.show_progress else sample_idxs
        # Use only score functions within the discovery subset of the data
        discovery_score_fns = {fn_name: fn.subslice(self.discovery_mask)
                            for fn_name, fn in self.score_fns.items()}
        if isinstance(self.raw_inputs, pd.DataFrame):
            discovery_inputs = self.raw_inputs[self.discovery_mask].reset_index(drop=True)
        else:
            discovery_inputs = self.raw_inputs[self.discovery_mask]
        
        if self.n_workers > 1:
            if isinstance(discovery_inputs, sps.csr_matrix):
                mat_for_workers = discovery_inputs.tocsc()
            else:
                if isinstance(discovery_inputs, pd.DataFrame):
                    mat_for_workers = discovery_inputs.values
                else:
                    mat_for_workers = discovery_inputs
                
            score_fn_order = list(discovery_score_fns.keys())
            score_data = np.vstack([discovery_score_fns[name].data if discovery_score_fns[name].data is not None else np.zeros(discovery_inputs.shape[0])
                                    for name in score_fn_order]).T
            hist_sizes = np.array([np.max(discovery_score_fns[name].data) + 1 
                                if discovery_score_fns[name].data is not None and np.issubdtype(discovery_score_fns[name].data.dtype, np.integer) else 0
                                for name in score_fn_order])

            # Create a set of processes
            n_processes = 4
            batch_size = discovery_inputs.shape[0] // n_processes
            pipes = [Pipe() for _ in range(n_processes)]
            processes = [Process(target=slice_scoring_worker, args=(
                mat_for_workers[i * batch_size: (i + 1) * batch_size],
                score_data[i * batch_size: (i + 1) * batch_size],
                hist_sizes,
                pipes[i][1]
                )) for i in range(n_processes)]
            for p in processes: p.start()
            

        for sample_idx in bar:
            source_row = self.raw_inputs.iloc[sample_idx] if isinstance(self.raw_inputs, pd.DataFrame) else self.raw_inputs[sample_idx]
            if self.n_workers > 1:
                self.all_scores += self.explore_fn(discovery_inputs,
                                                            source_row,
                                                            discovery_score_fns,
                                                            score_fn_order,
                                                            score_data,
                                                            hist_sizes,
                                                            self.seen_slices,
                                                            pipes,
                                                            group_filter=self.group_filter,
                                                            max_features=self.max_features,
                                                            min_items=self.min_items,
                                                            num_candidates=self.num_candidates,
                                                            min_weight=self.min_weight,
                                                            max_weight=self.max_weight)
            else:
                self.all_scores += self.explore_fn(discovery_inputs,
                                                            source_row,
                                                            discovery_score_fns,
                                                            seen_slices=self.seen_slices,
                                                            group_filter=self.group_filter,
                                                            max_features=self.max_features,
                                                            min_items=self.min_items,
                                                            num_candidates=self.num_candidates,
                                                            min_weight=self.min_weight,
                                                            max_weight=self.max_weight)
            
        if self.n_workers > 1:
            for p in pipes: p[0].send("STOP")
            for p in processes: p.join()
            
        self.results = RankedSliceList(list(set(self.all_scores)),
                            self.inputs,
                            self.score_fns,
                            eval_indexes=~self.discovery_mask if self.holdout_fraction > 0.0 else None,
                            min_weight=self.min_weight,
                            max_weight=self.max_weight,
                            similarity_threshold=self.similarity_threshold)
        return self.results, sample_idxs
    
def find_slices_by_sampling(inputs, 
                            score_fns, 
                            source_mask=None, 
                            group_filter=None, 
                            max_features=3, 
                            min_items=100, 
                            num_samples=10, 
                            num_candidates=20,
                            holdout_fraction=0.0,
                            positive_only=None,
                            min_weight=0.0,
                            max_weight=5.0,
                            show_progress=True):
    """
    Finds slices by sampling input rows and expanding slices that contain each
    sample row.
    
    :param inputs: a dataframe or matrix representing the discretized inputs
    :param score_fns: a dictionary mapping score names to `ScoreFunction`-type
        objects
    :param source_mask: if provided, a boolean mask indicating which rows should
        be sampled from for slice finding. This will encourage finding slices
        that match a particular criterion of interest (e.g. model errors).
    :param group_filter: if provided, a function that takes a `Slice` object and
        returns False if the slice should not be explored. Subslices of these
        slices will not be explored either.
    :param max_features: The maximum number of features allowed to be selected
        in a slice.
    :param min_items: The minimum number of rows that must match a slice for it
        to be considered.
    :param num_samples: The number of rows to sample from input when computing
        slices.
    :param num_candidates: The number of top-k candidates to generate subslices
        from. A separate top-k list is maintained for each score function. If
        set to None, all candidates will be kept.
    :param holdout_fraction: Proportion of the dataset that will be kept for
        final slice scoring.
    :param positive_only: If True, constrain valid slice values to be only
        positive values (columns with a value of zero for an instance will be
        skipped).
    :param min_weight: The minimum weight that will be used to calculate a score
        value from an individual score function.
    :param max_weight: The maximum weight that will be used to calculate a score
        value from an individual score function.
    :param show_progress: If True, show a tqdm progress bar during computation.
    
    :return: a `RankedSliceList` object containing the identified slices.
    """
    
    finder = SamplingSliceFinder(inputs,
                                score_fns,
                                source_mask=source_mask, 
                                group_filter=group_filter, 
                                max_features=max_features, 
                                min_items=min_items, 
                                num_candidates=num_candidates,
                                holdout_fraction=holdout_fraction,
                                positive_only=positive_only,
                                min_weight=min_weight,
                                max_weight=max_weight,
                                show_progress=show_progress)
    return finder.sample(num_samples)[0]
