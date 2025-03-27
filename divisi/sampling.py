import numpy as np
import pandas as pd
from .filters import ExcludeIfAny
from .utils import RankedList, powerset
from .subgroups import *
from .ranking import RankingFunctionBase
import tqdm
import os
from scipy import sparse as sps
from multiprocessing import RawArray, Pool
import time
from functools import partial
import torch
import pickle
import hashlib

# Global variables for worker processes
worker_inputs = None
worker_score_fns = None
worker_seen_slices = None

FLOAT_SCORE_DTYPE = np.dtype(np.float64)
INT_SCORE_DTYPE = np.dtype(np.int64)

torch.set_num_threads(1)

def worker_global_init(device,
                       seen_slices,
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
        worker_score_fns[name] = RankingFunctionBase.from_dict(score_dicts[name], double_mat[:,i]).to(device)
    for i, name in enumerate(int_score_names):
        worker_score_fns[name] = RankingFunctionBase.from_dict(score_dicts[name], int_mat[:,i]).to(device)
    for name in score_dicts:
        if name not in worker_score_fns:
            worker_score_fns[name] = RankingFunctionBase.from_dict(score_dicts[name], None).to(device)
            
    worker_seen_slices = seen_slices
    
    # Try to make the processes a little less CPU-intensive
    try: os.nice(5)
    except: pass
    
def init_worker_dataframe(inputs, 
                          inputs_shape, 
                          inputs_dtype,
                          input_columns, 
                          sample_proportion,
                          device,
                          *score_fn_args):
    """
    :param inputs: A RawArray containing the buffer of discrete input data
    :param inputs_shape: The shape of the original discrete input data
    :param inputs_dtype: Dtype of the input data
    :param input_columns: Column names for the dataframe
    """
    global worker_inputs, worker_score_fns
    
    # Initialize worker inputs from buffer
    mat = np.frombuffer(inputs, dtype=inputs_dtype).reshape(inputs_shape)
    worker_inputs = pd.DataFrame(mat, columns=input_columns)
    
    worker_global_init(device, *score_fn_args)
    
    if sample_proportion < 1.0:
        worker_sample = np.random.uniform(0.0, 1.0, size=worker_inputs.shape[0]) <= sample_proportion
        worker_inputs = worker_inputs[worker_sample]
        worker_score_fns = {k: v.subslice(worker_sample) for k, v in worker_score_fns.items()}
        
    
def init_worker_array(inputs, 
                          inputs_shape, 
                          inputs_dtype,
                          sample_proportion,
                          device,
                          *score_fn_args):
    """
    :param inputs: A RawArray containing the buffer of discrete input data
    :param inputs_shape: The shape of the original discrete input data
    :param inputs_dtype: Dtype of the input data
    :param input_columns: Column names for the dataframe
    """
    global worker_inputs, worker_score_fns
    
    worker_inputs = np.frombuffer(inputs, dtype=inputs_dtype).reshape(inputs_shape)
    worker_global_init(device, *score_fn_args)
    
    if sample_proportion < 1.0:
        worker_sample = np.random.uniform(0.0, 1.0, size=worker_inputs.shape[0]) <= sample_proportion
        worker_inputs = torch.from_numpy(worker_inputs[worker_sample]).to(device)
        worker_score_fns = {k: v.subslice(worker_sample) for k, v in worker_score_fns.items()}
    else:
        worker_inputs = torch.from_numpy(worker_inputs).to(device)

def init_worker_sparse(inputs_data, 
                       inputs_indices,
                       inputs_indptr,
                       inputs_shape,
                       inputs_dtype,
                       index_dtype,
                       sample_proportion,
                       device,
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
    global worker_inputs, worker_score_fns
    
    data_mat = np.frombuffer(inputs_data, dtype=inputs_dtype)
    indices_mat = np.frombuffer(inputs_indices, dtype=index_dtype)
    indptr_mat = np.frombuffer(inputs_indptr, dtype=index_dtype)
    
    worker_inputs = sps.csr_matrix((data_mat, indices_mat, indptr_mat),
                                   shape=inputs_shape)
    
    worker_global_init(device, *score_fn_args)
    
    if sample_proportion < 1.0:
        worker_sample = np.random.uniform(0.0, 1.0, size=worker_inputs.shape[0]) <= sample_proportion
        worker_inputs = worker_inputs[worker_sample]
        worker_score_fns = {k: v.subslice(worker_sample) for k, v in worker_score_fns.items()}

def explore_groups_worker(source_row, **kwargs):
    return explore_groups_beam_search(worker_inputs,
                                      worker_score_fns,
                                      source_row,
                                      seen_slices=worker_seen_slices,
                                      **kwargs)
    
def explore_groups_beam_search(inputs, 
                               ranking_fns, 
                               source_row, 
                               col_names=None,
                               seen_slices=None, 
                               rule_filter=None, 
                               initial_slice=None,
                               positive_only=None,
                               max_features=5, 
                               min_items_fraction=5, 
                               min_weight=0.0, 
                               max_weight=5.0, 
                               num_candidates=20,
                               device='cpu'):
    scored_slices = set()
    if initial_slice is None: initial_slice = IntersectionRule([])
    if num_candidates is not None:
        # Maintain a ranking for each function separately, as different slices may
        # maximize different functions
        best_groups = {fn_name: RankedList(num_candidates, [(initial_slice, -1e9)]) 
                        for fn_name in ranking_fns}
    else:
        best_groups = set([initial_slice])

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
    
    # Keep track of how many times each row has been used as part of a slice
    row_use_counts = torch.zeros(mat_for_masks.shape[0], dtype=torch.long, device=device)
    
    # Iterate over the columns max_features times
    for col_size in range(max_features):
        if num_candidates is not None:
            saved_groups = set([g for _, gset in best_groups.items() for g in gset.items])
        else:
            saved_groups = set(g for g in best_groups)
        num_evaluated = 0
        for base_slice in saved_groups:
            base_mask = base_slice.make_mask(mat_for_masks, univariate_masks=univariate_masks, device=device)
            
            prescored_slices = []
            features_to_score = []
            
            for i, col in enumerate(input_columns):
                # Skip if only slicing using positive values and the row has a negative value
                if positive_only and not source_row[col]: continue
                # Skip if we've already looked at this column
                feature_to_add = RuleFeature(col, (source_row[col],))
                if feature_to_add in base_slice: continue
                
                new_slice = base_slice.subslice(feature_to_add)
                
                # Skip if the user wants to filter this slice out
                if new_slice in scored_slices: 
                    continue
                if rule_filter is not None and not rule_filter(new_slice): 
                    continue

                if new_slice in seen_slices:
                    # Retrieve existing scores
                    slice_scores = seen_slices[new_slice]
                    if not slice_scores: continue
                    new_slice.score_values = slice_scores
                    prescored_slices.append(new_slice)
                else:
                    # features_to_score.append(feature_to_add)
                    new_slice_scores = {}
                    slice_mask = Rule(feature_to_add).make_mask(mat_for_masks, existing_mask=base_mask, univariate_masks=univariate_masks, device=device)
                    if slice_mask.sum() / slice_mask.shape[0] < min_items_fraction:
                        seen_slices[new_slice] = None
                        continue
                    itemized_masks = [univariate_masks[f] for f in new_slice.univariate_features()]
                    for key, scorer in ranking_fns.items():
                        new_slice_scores[key] = scorer.calculate_score(new_slice, slice_mask, itemized_masks).item()
                    prescored_slices.append(new_slice.rescore(new_slice_scores))
                    
            new_scored_slices = []
                            
            for new_slice in prescored_slices + new_scored_slices:
                seen_slices[new_slice] = new_slice.score_values
                scored_slices.add(new_slice)
                if num_candidates is not None:
                    for fn_name in ranking_fns:
                        # Add to each ranking the score where only the current score
                        # function's value is maximized
                        score = sum((max_weight if f == fn_name else min_weight) * new_slice.score_values[f] for f in ranking_fns)
                        best_groups[fn_name].add(new_slice, score)
                else:
                    best_groups.add(new_slice)
        
    return list(scored_slices), row_use_counts.cpu().numpy()

class SamplingSubgroupSearch:
    """
    A class that finds slices by sampling input rows and expanding slices that
    contain each sample row. This class can be instantiated and used multiple
    times, while saving previously seen slices.
    """
    def __init__(self,
                 inputs, 
                 ranking_fns, 
                 source_mask=None, 
                 rule_filter=None, 
                 max_features=3, 
                 min_items_fraction=0.01, 
                 num_candidates=20,
                 final_num_candidates=None,
                 holdout_fraction=0.0,
                 min_weight=0.0,
                 max_weight=5.0,
                 similarity_threshold=0.9,
                 scoring_fraction=None, # None, 'auto', or number between 0 and 1
                 show_progress=True,
                 progress_fn=None,
                 n_workers=None,
                 initial_slice=None,
                 discovery_mask=None,
                 device='cpu'):
        self.inputs = inputs
        self.raw_inputs = inputs.df if hasattr(inputs, 'df') else inputs
        self.ranking_fns = ranking_fns
        self.source_mask = source_mask
        self.rule_filter = rule_filter
        self.max_features = max_features
        self.min_items_fraction = min_items_fraction
        self.num_candidates = num_candidates
        self.final_num_candidates = final_num_candidates
        self.holdout_fraction = holdout_fraction
        self.min_weight = min_weight
        self.max_weight = max_weight
        self.show_progress = show_progress
        self.initial_slice = initial_slice
        self.similarity_threshold = similarity_threshold
        self.scoring_fraction = scoring_fraction
        self.device = device
        
        if n_workers is None: 
            self.n_workers = max(1, os.cpu_count() // 2) if len(self.inputs) > 10000 else 1
        else: self.n_workers = n_workers
        
        self.explore_fn = explore_groups_beam_search
        self.progress_fn = progress_fn
        if isinstance(self.raw_inputs, sps.csr_matrix):
            if self.raw_inputs.max() > 1:
                raise ValueError("Sparse matrices must be binary")
            self.positive_only = True
        else:
            self.positive_only = False

        self.all_scores = []
        self.seen_slices = {} 
        if discovery_mask is None:       
            self.discovery_mask = (np.random.uniform(size=self.raw_inputs.shape[0]) >= self.holdout_fraction)
        else:
            self.discovery_mask = discovery_mask
        self.discovery_data = self.inputs.filter(self.discovery_mask)
        self.eval_data = self.inputs.filter(~self.discovery_mask) if self.holdout_fraction > 0.0 else None
        self.sampled_idxs = np.zeros(self.raw_inputs.shape[0], dtype=bool)
        self.results = self.refilter_results()
        
    def clear_results(self):
        self.all_scores = []
        self.seen_slices = {} 
        self.sampled_idxs = np.zeros(self.raw_inputs.shape[0], dtype=bool)
        self.results = self.refilter_results()
        
    def copy_spec(self, inputs=None, ranking_fns=None, **kwargs):
        return SamplingSubgroupSearch(
            self.inputs if inputs is None else inputs, 
            self.ranking_fns if ranking_fns is None else ranking_fns, 
            source_mask=kwargs.get("source_mask", self.source_mask), 
            rule_filter=kwargs.get("rule_filter", self.rule_filter),
            max_features=kwargs.get("max_features", self.max_features), 
            min_items_fraction=kwargs.get("min_items_fraction", self.min_items_fraction), 
            num_candidates=kwargs.get("num_candidates", self.num_candidates),
            final_num_candidates=kwargs.get("final_num_candidates", self.final_num_candidates),
            holdout_fraction=kwargs.get("holdout_fraction", self.holdout_fraction),
            min_weight=kwargs.get("min_weight", self.min_weight),
            max_weight=kwargs.get("max_weight", self.max_weight),
            similarity_threshold=kwargs.get("similarity_threshold", self.similarity_threshold),
            show_progress=kwargs.get("show_progress", self.show_progress),
            progress_fn=kwargs.get("progress_fn", self.progress_fn),
            n_workers=kwargs.get("n_workers", self.n_workers),
            initial_slice=kwargs.get("initial_slice", self.initial_slice),
            scoring_fraction=kwargs.get("scoring_fraction", self.scoring_fraction),
            discovery_mask=kwargs.get("discovery_mask", self.discovery_mask)
        )
        
    def get_configuration_hash(self):
        """
        Returns a hash of the configuration of the sampler.
        """
        return hashlib.sha256(pickle.dumps(self.state_dict()["config"])).hexdigest()
        
    def state_dict(self):
        return {
            "config": {
                "source_mask": self.source_mask, 
                "rule_filter": self.rule_filter,
                "max_features": self.max_features, 
                "min_items_fraction": self.min_items_fraction, 
                "num_candidates": self.num_candidates,
                "final_num_candidates": self.final_num_candidates,
                "holdout_fraction": self.holdout_fraction,
                "min_weight": self.min_weight,
                "max_weight": self.max_weight,
                "similarity_threshold": self.similarity_threshold,
                "show_progress": self.show_progress,
                "n_workers": self.n_workers,
                "initial_slice": self.initial_slice,
                "scoring_fraction": self.scoring_fraction,
                "discovery_mask": self.discovery_mask
            },
            "results": {
                "sampled_idxs": self.sampled_idxs.tolist(),
                "all_scores": [s.to_dict() for s in self.all_scores]
            }
        }
        
    @classmethod
    def from_state_dict(self, inputs, ranking_fns, data):
        sf = SamplingSubgroupSearch(inputs, ranking_fns, **data["config"])
        sf.sampled_idxs = np.array(data["results"]["sampled_idxs"])
        all_scores = []
        for s in data["results"]["all_scores"]:
            slice_obj = Rule.from_dict(s)
            all_scores.append(IntersectionRule(slice_obj.univariate_features(), slice_obj.score_values))
        sf.all_scores = all_scores
        sf.results = sf.refilter_results()
        return sf
        
    def _create_worker_initializer(self, discovery_inputs, discovery_score_fns, sample_size=None):
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
            if torch.is_floating_point(score_fn.data):
                double_score_data.append(score_fn.data.cpu().numpy())
                double_score_names.append(name)
            else:
                int_score_data.append(score_fn.data.cpu().numpy())
                int_score_names.append(name)
                
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
                1 if sample_size is None else sample_size, # sample size
                self.device,
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
                1 if sample_size is None else sample_size, # sample size
                self.device,
                self.seen_slices,
                *score_init_args
            )
        else:
            return init_worker_array, (
                input_buf, 
                discovery_inputs.shape, 
                input_dtype,
                1 if sample_size is None else sample_size, # sample size
                self.device,
                self.seen_slices,
                *score_init_args
            )

    def _progress_fn_emitter(self, iterable, total):
        for i, item in enumerate(iterable):
            should_stop = self.progress_fn(i, total)
            yield item
            if should_stop:
                break
        self.progress_fn(total, total)
        
    def rescore(self, new_score_fns):
        """
        Updates the set of score functions, re-evaluates the slice scores, and 
        returns the new RankedSliceList. Also sets the ranking_fns property to the 
        provided value.
        """
        _, discovery_inputs, _ = self.make_discovery_inputs()
        discovery_score_fns = {fn_name: fn.subslice(self.discovery_mask)
                            for fn_name, fn in new_score_fns.items()}
        univariate_masks = {}
        rescored_slices = score_subgroups_batch(self.all_scores,
                                                discovery_inputs,
                                                discovery_score_fns,
                                                self.max_features,
                                                min_items_fraction=self.min_items_fraction,
                                                device=self.device,
                                                univariate_masks=univariate_masks)
        
        self.seen_slices = {}
        self.all_scores = []
        for old_slice, new_slice in rescored_slices.items():
            if new_slice is not None:
                self.all_scores.append(new_slice)
                self.seen_slices[new_slice] = new_slice.score_values
            else:
                self.seen_slices[old_slice] = None
                
        self.ranking_fns = new_score_fns
        self.results = self.refilter_results()
        return self.results
        
    def make_discovery_inputs(self):
        if self.source_mask is not None:
            source_mask = (self.source_mask.values if isinstance(self.source_mask, pd.Series) else self.source_mask).copy()
            source_mask &= self.discovery_mask
        else:
            source_mask = self.discovery_mask.copy()
            
        source_mask &= ~self.sampled_idxs
                    
        # Use only score functions within the discovery subset of the data
        discovery_score_fns = {fn_name: fn.subslice(self.discovery_mask)
                            for fn_name, fn in self.ranking_fns.items()}
        if isinstance(self.raw_inputs, (sps.csr_matrix, sps.csc_matrix)):
            discovery_inputs = self.raw_inputs[self.discovery_mask].astype(np.uint8)
        else:
            if isinstance(self.raw_inputs, pd.DataFrame):
                discovery_inputs = self.raw_inputs[self.discovery_mask].values.astype(np.uint8)
            else:
                discovery_inputs = self.raw_inputs[self.discovery_mask].astype(np.uint8)
            discovery_inputs = torch.from_numpy(discovery_inputs).to(self.device)
        
        if self.initial_slice is not None:
            initial_slice_mask = self.initial_slice.make_mask(self.raw_inputs).cpu().numpy()
            source_mask &= initial_slice_mask
            if source_mask.sum() == 0:
                raise ValueError("No samples can be taken from the intersection of the provided source mask and the initial slice")
        return source_mask, discovery_inputs, discovery_score_fns

    def sample(self, num_samples):
        """
        Runs the sampling slice finder for a set number of samples.
        
        :param num_samples: The number of samples to draw from the dataset
        :return: All slices found so far in a RankedSliceList object
        """
        source_mask, discovery_inputs, discovery_score_fns = self.make_discovery_inputs()
        
        allowed_indexes = np.argwhere(source_mask).flatten()
        sample_idxs = np.random.choice(allowed_indexes, 
                                    size=min(len(allowed_indexes), num_samples), 
                                    replace=False)
        self.sampled_idxs[sample_idxs] = True
            
        sample_rows = [self.raw_inputs.iloc[sample_idx] 
                if isinstance(self.raw_inputs, pd.DataFrame) else self.raw_inputs[sample_idx]
                for sample_idx in sample_idxs]
            
        if str(self.scoring_fraction).lower() == 'auto':
            sample_size = min(10000 / discovery_inputs.shape[0], 1 / self.n_workers) # number of rows in which to evaluate each slice
        elif self.scoring_fraction is None:
            sample_size = 1.0
        else:
            sample_size = self.scoring_fraction
        
        rule_filter = self.get_rule_filter()
        
        slices_to_score = set()
        if self.final_num_candidates is not None:
            best_groups = {fn_name: RankedList(self.final_num_candidates)
                        for fn_name in discovery_score_fns}
        if self.n_workers > 1:
            worker_inputs = discovery_inputs.cpu().numpy() if isinstance(discovery_inputs, torch.Tensor) else discovery_inputs
            init_fn, init_args = self._create_worker_initializer(worker_inputs, discovery_score_fns, sample_size=sample_size)
            
            worker = partial(explore_groups_worker, rule_filter=rule_filter,
                                                    max_features=self.max_features,
                                                    min_items_fraction=self.min_items_fraction,
                                                    initial_slice=self.initial_slice,
                                                    num_candidates=self.num_candidates,
                                                    min_weight=self.min_weight,
                                                    max_weight=self.max_weight,
                                                    device=self.device)
            
            pool = Pool(processes=self.n_workers, initializer=init_fn, initargs=init_args, maxtasksperchild=10)
            bar = pool.imap_unordered(worker, sample_rows)
            if self.show_progress: bar = tqdm.tqdm(bar, total=len(sample_rows))
            if self.progress_fn is not None: bar = self._progress_fn_emitter(bar, len(sample_rows))
            for results, _ in bar:
                for s in results:
                    if self.final_num_candidates is not None:
                        for fn_name in discovery_score_fns:
                            best_groups[fn_name].add(s, s.score_values[fn_name])
                    else:
                        slices_to_score.add(s)

            pool.close()
            pool.join()
            
        else:
            bar = tqdm.tqdm(sample_rows) if self.show_progress else sample_rows
            if self.progress_fn is not None:
                bar = self._progress_fn_emitter(bar, len(sample_rows))

            for source_row in bar:
                worker_sample = np.random.uniform(0.0, 1.0, size=discovery_inputs.shape[0]) <= sample_size
                worker_inputs = discovery_inputs[worker_sample]
                worker_score_fns = {k: v.subslice(worker_sample) for k, v in discovery_score_fns.items()}
                
                sample_results, use_counts = self.explore_fn(worker_inputs,
                                                    worker_score_fns,
                                                    source_row,
                                                    seen_slices=self.seen_slices,
                                                    rule_filter=rule_filter,
                                                    max_features=self.max_features,
                                                    min_items_fraction=self.min_items_fraction,
                                                    initial_slice=self.initial_slice,
                                                    num_candidates=self.num_candidates,
                                                    min_weight=self.min_weight,
                                                    max_weight=self.max_weight,
                                                    device=self.device)
                for s in sample_results:
                    if self.final_num_candidates is not None:
                        for fn_name in discovery_score_fns:
                            best_groups[fn_name].add(s, s.score_values[fn_name])
                    else:
                        slices_to_score.add(s)
                    if sample_size == 1.0:
                        self.seen_slices[s] = s.score_values
        if self.final_num_candidates is not None:
            for ranking in best_groups.values():
                slices_to_score |= set(ranking.items)
                
        for slice_obj in list(slices_to_score):
            univariate = slice_obj.univariate_features()
            for superslice_features in powerset(univariate):
                if len(superslice_features) == 0 or len(superslice_features) == len(univariate):
                    continue
                superslice = IntersectionRule(superslice_features)
                if superslice in slices_to_score: continue
                slices_to_score.add(superslice)
                
        if sample_size == 1.0:
            old_scored_slices = [s for s in slices_to_score if s.score_values]
            slices_to_score = set(s for s in slices_to_score if not s.score_values)
        else:
            old_scored_slices = []
            
        univariate_masks = {}
        rescored_slices = score_subgroups_batch(slices_to_score,
                                                discovery_inputs,
                                                discovery_score_fns,
                                                self.max_features,
                                                min_items_fraction=self.min_items_fraction,
                                                device=self.device,
                                                univariate_masks=univariate_masks)
        
        for old_slice, new_slice in rescored_slices.items():
            if new_slice is not None:
                self.all_scores.append(new_slice)
                if old_slice in self.seen_slices:
                    del self.seen_slices[old_slice]
                self.seen_slices[new_slice] = new_slice.score_values
            else:
                self.seen_slices[old_slice] = None

        # Scores are reliable
        for new_slice in old_scored_slices:
            if self.n_workers > 1 and new_slice in self.seen_slices: continue
            self.all_scores.append(new_slice)
            self.seen_slices[new_slice] = new_slice.score_values
            
        self.results = self.refilter_results()
        return self.results, sample_idxs
    
    def get_rule_filter(self):
        if isinstance(self.inputs, DiscretizedData):
            base_filter = self.inputs.filter_single_values()
            if self.rule_filter is not None and base_filter is not None:
                rule_filter = ExcludeIfAny(base_filter, self.inputs.encode_filter(self.rule_filter))
            elif self.rule_filter is not None:
                rule_filter = self.inputs.encode_filter(self.rule_filter)
            else:
                rule_filter = base_filter
        else:
            rule_filter = self.rule_filter
        return rule_filter
    
    def refilter_results(self):
        """
        Returns a ranked subgroup list of only the results that match the current filter.
        """
        rule_filter = self.get_rule_filter()
        results = RankedSubgroupList([r for r in set(self.all_scores)
                                      if not rule_filter or rule_filter(r)],
                    self.inputs,
                    self.ranking_fns,
                    eval_indexes=~self.discovery_mask if self.holdout_fraction > 0.0 else None,
                    min_weight=self.min_weight,
                    max_weight=self.max_weight,
                    similarity_threshold=self.similarity_threshold,
                    device=self.device)
        return results
    
def find_slices_by_sampling(inputs, 
                            ranking_fns, 
                            source_mask=None, 
                            rule_filter=None, 
                            initial_slice=None,
                            max_features=3, 
                            min_items_fraction=100, 
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
    :param ranking_fns: a dictionary mapping score names to `ScoreFunction`-type
        objects
    :param source_mask: if provided, a boolean mask indicating which rows should
        be sampled from for slice finding. This will encourage finding slices
        that match a particular criterion of interest (e.g. model errors).
    :param rule_filter: if provided, a function that takes a `Rule` object and
        returns False if the slice should not be explored. Subslices of these
        slices will not be explored either.
    :param initial_slice: if provided, a slice that will be used as the base
        slice for all returned results. Samples will only be drawn from within
        this slice.
    :param max_features: The maximum number of features allowed to be selected
        in a slice.
    :param min_items_fraction: The minimum fraction of rows that must match a slice for it
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
    
    finder = SamplingSubgroupSearch(inputs,
                                ranking_fns,
                                source_mask=source_mask, 
                                rule_filter=rule_filter,
                                initial_slice=initial_slice,
                                max_features=max_features, 
                                min_items_fraction=min_items_fraction, 
                                num_candidates=num_candidates,
                                holdout_fraction=holdout_fraction,
                                positive_only=positive_only,
                                min_weight=min_weight,
                                max_weight=max_weight,
                                show_progress=show_progress)
    return finder.sample(num_samples)[0]
