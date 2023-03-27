import numpy as np
import pandas as pd
from .utils import RankedList, make_mask
from .slices import Slice, RankedSliceList
from .scores import ScoreFunctionBase
import tqdm
import os
from scipy import sparse as sps
from multiprocessing import RawArray, Pool
import time
from functools import partial

# Global variables for worker processes
worker_inputs = None
worker_score_fns = None
worker_seen_slices = None

FLOAT_SCORE_DTYPE = np.dtype(np.float64)
INT_SCORE_DTYPE = np.dtype(np.int64)

def worker_global_init(seen_slices,
                       double_score_data, 
                    double_score_data_shape, 
                    double_score_names, 
                    int_score_data, 
                    int_score_data_shape, 
                    int_score_names, 
                    score_dicts):
    """
    :param seen_slices: A dictionary of slice specs to scores for those slices.
    :param double_score_data: A RawArray containing the buffer of score data that
        is in floating-point format
    :param double_score_data_shape: The shape of the floating-point score data
        matrix
    :param double_score_names: Ordered set of names of the floating-point score
        data
    :param int_score_data: A RawArray containing the buffer of score data that
        is in integer format
    :param int_score_data_shape: The shape of the integer score data
        matrix
    :param int_score_names: Ordered set of names of the integer score
        data
    :param score_dicts: A dictionary mapping score function names to metadata
        dicts for each score function
    """
    global worker_score_fns, worker_seen_slices
    
    # Initialize score functions from buffers
    if double_score_data is not None:
        double_mat = np.frombuffer(double_score_data, dtype=FLOAT_SCORE_DTYPE).reshape(double_score_data_shape)
    else:
        double_mat = None
    if int_score_data is not None:
        int_mat = np.frombuffer(int_score_data, dtype=INT_SCORE_DTYPE).reshape(int_score_data_shape)
    else:
        int_mat = None
        
    worker_score_fns = {}
    for i, name in enumerate(double_score_names):
        worker_score_fns[name] = ScoreFunctionBase.from_dict(score_dicts[name], double_mat[:,i])
    for i, name in enumerate(int_score_names):
        worker_score_fns[name] = ScoreFunctionBase.from_dict(score_dicts[name], int_mat[:,i])
    for name in score_dicts:
        if name not in worker_score_fns:
            worker_score_fns[name] = ScoreFunctionBase.from_dict(score_dicts[name], None)
            
    worker_seen_slices = seen_slices
    
    # Try to make the processes a little less CPU-intensive
    try: os.nice(5)
    except: pass
    
def init_worker_dataframe(inputs, 
                          inputs_shape, 
                          inputs_dtype,
                          input_columns, 
                          *score_fn_args):
    """
    :param inputs: A RawArray containing the buffer of discrete input data
    :param inputs_shape: The shape of the original discrete input data
    :param inputs_dtype: Dtype of the input data
    :param input_columns: Column names for the dataframe
    """
    global worker_inputs
    
    # Initialize worker inputs from buffer
    mat = np.frombuffer(inputs, dtype=inputs_dtype).reshape(inputs_shape)
    worker_inputs = pd.DataFrame(mat, columns=input_columns)
    
    worker_global_init(*score_fn_args)
    
def init_worker_array(inputs, 
                          inputs_shape, 
                          inputs_dtype,
                          *score_fn_args):
    """
    :param inputs: A RawArray containing the buffer of discrete input data
    :param inputs_shape: The shape of the original discrete input data
    :param inputs_dtype: Dtype of the input data
    :param input_columns: Column names for the dataframe
    """
    global worker_inputs
    
    worker_inputs = np.frombuffer(inputs, dtype=inputs_dtype).reshape(inputs_shape)
    worker_global_init(*score_fn_args)

def init_worker_sparse(inputs_data, 
                       inputs_indices,
                       inputs_indptr,
                       inputs_shape,
                       inputs_dtype,
                       index_dtype,
                       *score_fn_args):
    """
    :param inputs_data: A RawArray containing the buffer of sparse data
    :param inputs_indices: A RawArray containing the buffer of sparse indices
    :param inputs_indptr: A RawArray containing the buffer of sparse indptr
    :param inputs_indptr_shape: The shape of the sparse indptr array
    :param inputs_shape: The shape of the overall sparse array
    :param inputs_dtype: Dtype of the input data
    :param input_columns: Column names for the dataframe
    """
    global worker_inputs
    
    data_mat = np.frombuffer(inputs_data, dtype=inputs_dtype)
    indices_mat = np.frombuffer(inputs_indices, dtype=index_dtype)
    indptr_mat = np.frombuffer(inputs_indptr, dtype=index_dtype)
    
    worker_inputs = sps.csr_matrix((data_mat, indices_mat, indptr_mat),
                                   shape=inputs_shape)
    
    worker_global_init(*score_fn_args)

def explore_groups_worker(source_row, **kwargs):
    return explore_groups_beam_search(worker_inputs,
                                      worker_score_fns,
                                      source_row,
                                      seen_slices=worker_seen_slices,
                                      **kwargs)
    
def explore_groups_beam_search(inputs, 
                               score_fns, 
                               source_row, 
                               seen_slices=None, 
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
                
                if num_candidates is not None:
                    for fn_name in score_fns:
                        # Add to each ranking the score where only the current score
                        # function's value is maximized
                        score = sum((max_weight if f == fn_name else min_weight) * new_slice.score_values[f] for f in score_fns)
                        best_groups[fn_name].add(new_slice, score)
                else:
                    best_groups.add(new_slice)

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
                 progress_fn=None,
                 n_workers=None):
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
        
        if n_workers is None: self.n_workers = max(1, os.cpu_count() // 2)
        else: self.n_workers = n_workers
        
        self.explore_fn = explore_groups_beam_search
        self.progress_fn = progress_fn
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
        
    def _create_worker_initializer(self, discovery_inputs, discovery_score_fns):
        """
        Creates shared-memory arrays to store the input data and score function
        data, specific to the input format (dataframe, array, or sparse array).
        """
        # Set up arrays for input dataframe
        if isinstance(discovery_inputs, pd.DataFrame):
            input_dtype = discovery_inputs[discovery_inputs.columns[0]].dtype
            if not all(discovery_inputs[col].dtype == input_dtype for col in discovery_inputs.columns):
                input_dtype = np.dtype('int32')
            input_buf = RawArray(input_dtype.char, discovery_inputs.shape[0] * discovery_inputs.shape[1])
            inputs_np = np.frombuffer(input_buf, dtype=input_dtype).reshape(discovery_inputs.shape)
            np.copyto(inputs_np, discovery_inputs)
        elif isinstance(discovery_inputs, sps.csr_matrix):
            input_dtype = np.dtype(discovery_inputs.dtype)
            data_buf = RawArray(input_dtype.char, discovery_inputs.data.shape[0])
            data_np = np.frombuffer(data_buf, dtype=input_dtype)
            np.copyto(data_np, discovery_inputs.data)
            index_dtype = np.dtype(discovery_inputs.indices.dtype)
            indices_buf = RawArray(index_dtype.char, discovery_inputs.indices.shape[0])
            indices_np = np.frombuffer(indices_buf, dtype=index_dtype)
            np.copyto(indices_np, discovery_inputs.indices)
            indptr_buf = RawArray(index_dtype.char, discovery_inputs.indptr.shape[0])
            indptr_np = np.frombuffer(indptr_buf, dtype=index_dtype)
            np.copyto(indptr_np, discovery_inputs.indptr)
        else:
            input_dtype = np.dtype(discovery_inputs.dtype)
            input_buf = RawArray(input_dtype.char, discovery_inputs.shape[0] * discovery_inputs.shape[1])
            inputs_np = np.frombuffer(input_buf, dtype=input_dtype).reshape(discovery_inputs.shape)
            np.copyto(inputs_np, discovery_inputs)
            
        # Create score data
        double_score_data = []
        double_score_names = []
        int_score_data = []
        int_score_names = []
        score_dicts = {}
        for name, score_fn in discovery_score_fns.items():
            score_dicts[name] = score_fn.meta_dict()
            if score_fn.data is None: continue
            if np.issubdtype(score_fn.data.dtype, np.integer):
                int_score_data.append(score_fn.data)
                int_score_names.append(name)
            else:
                double_score_data.append(score_fn.data)
                double_score_names.append(name)
                
        double_score_data_buf = RawArray(FLOAT_SCORE_DTYPE.char, discovery_inputs.shape[0] * len(double_score_names))
        double_score_data_np = np.frombuffer(double_score_data_buf, dtype=FLOAT_SCORE_DTYPE).reshape((discovery_inputs.shape[0], len(double_score_names)))
        for col in range(len(double_score_data)):
            np.copyto(double_score_data_np[:,col], double_score_data[col])

        int_score_data_buf = RawArray(INT_SCORE_DTYPE.char, discovery_inputs.shape[0] * len(int_score_names))
        int_score_data_np = np.frombuffer(int_score_data_buf, dtype=INT_SCORE_DTYPE).reshape((discovery_inputs.shape[0], len(int_score_names)))
        for col in range(len(int_score_data)):
            np.copyto(int_score_data_np[:,col], int_score_data[col])
            
        score_init_args = (
            double_score_data_buf, 
            (discovery_inputs.shape[0], len(double_score_names)), 
            double_score_names, 
            int_score_data_buf,
            (discovery_inputs.shape[0], len(int_score_names)), 
            int_score_names, 
            score_dicts
        )
        if isinstance(discovery_inputs, pd.DataFrame):
            return init_worker_dataframe, (
                input_buf, 
                discovery_inputs.shape, 
                input_dtype,
                discovery_inputs.columns, 
                self.seen_slices,
                *score_init_args
            )
        elif isinstance(discovery_inputs, sps.csr_matrix):
            return init_worker_sparse, (
                data_buf,
                indices_buf,
                indptr_buf,
                discovery_inputs.shape, 
                input_dtype,
                index_dtype,
                self.seen_slices,
                *score_init_args
            )
        else:
            return init_worker_array, (
                input_buf, 
                discovery_inputs.shape, 
                input_dtype,
                self.seen_slices,
                *score_init_args
            )

    def _progress_fn_emitter(self, iterable, total):
        for i, item in enumerate(iterable):
            self.progress_fn(i, total)
            yield item
        self.progress_fn(total, total)
    
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
            
        sample_rows = [self.raw_inputs.iloc[sample_idx] 
                       if isinstance(self.raw_inputs, pd.DataFrame) else self.raw_inputs[sample_idx]
                       for sample_idx in sample_idxs]
            
        # Use only score functions within the discovery subset of the data
        discovery_score_fns = {fn_name: fn.subslice(self.discovery_mask)
                            for fn_name, fn in self.score_fns.items()}
        if isinstance(self.raw_inputs, pd.DataFrame):
            discovery_inputs = self.raw_inputs[self.discovery_mask].reset_index(drop=True)
        else:
            discovery_inputs = self.raw_inputs[self.discovery_mask]
        
        if self.n_workers > 1:
            init_fn, init_args = self._create_worker_initializer(discovery_inputs, discovery_score_fns)
            
            worker = partial(explore_groups_worker, group_filter=self.group_filter,
                                                    max_features=self.max_features,
                                                    min_items=self.min_items,
                                                    num_candidates=self.num_candidates,
                                                    min_weight=self.min_weight,
                                                    max_weight=self.max_weight)
            
            pool = Pool(processes=self.n_workers, initializer=init_fn, initargs=init_args)
            bar = pool.imap_unordered(worker, sample_rows)
            if self.show_progress: bar = tqdm.tqdm(bar, total=len(sample_rows))
            if self.progress_fn is not None: bar = self._progress_fn_emitter(bar)
            for results in bar:
                self.all_scores += results
            pool.close()
            pool.join()
        else:
            bar = tqdm.tqdm(sample_rows) if self.show_progress else sample_rows
            if self.progress_fn is not None:
                bar = self._progress_fn_emitter(bar)

            for source_row in bar:
                self.all_scores += self.explore_fn(discovery_inputs,
                                                    discovery_score_fns,
                                                    source_row,
                                                    seen_slices=self.seen_slices,
                                                    group_filter=self.group_filter,
                                                    max_features=self.max_features,
                                                    min_items=self.min_items,
                                                    num_candidates=self.num_candidates,
                                                    min_weight=self.min_weight,
                                                    max_weight=self.max_weight)
               
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
