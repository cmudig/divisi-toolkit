import numpy as np
import pandas as pd
from .utils import RankedList, make_mask
from .slices import Slice, RankedSliceList
import tqdm

def explore_groups_beam_search(inputs, 
                               source_row, 
                               score_fns, 
                               seen_slices, 
                               group_filter=None, 
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

    # Iterate over the columns max_features times
    for col_size in range(max_features):
        if num_candidates is not None:
            saved_groups = set([g for _, gset in best_groups.items() for g in gset.items])
        else:
            saved_groups = set(g for g in best_groups)
        for base_slice in saved_groups:
            for col in inputs.columns:
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
                    mask = make_mask(inputs, new_slice)
                    if mask.sum() < min_items: 
                        seen_slices[new_slice] = None
                        continue
                    for key, scorer in score_fns.items():
                        new_slice.score_values[key] = scorer.calculate_score(new_slice, mask)
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
                 holdout_fraction=0.0,
                 min_weight=0.0,
                 max_weight=5.0,
                 show_progress=True):
        self.inputs = inputs
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

        self.all_scores = []
        self.seen_slices = {}        
        self.discovery_mask = (np.random.uniform(size=len(self.inputs)) >= self.holdout_fraction)
        self.sampled_idxs = np.zeros(len(self.inputs), dtype=bool)
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
            source_mask = self.discovery_mask & self.sampled_idxs
            
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
        
        for sample_idx in bar:
            source_row = self.inputs.iloc[sample_idx]
            self.all_scores += explore_groups_beam_search(self.inputs[self.discovery_mask].reset_index(drop=True),
                                                        source_row,
                                                        discovery_score_fns,
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
                            max_weight=self.max_weight)
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
                                min_weight=min_weight,
                                max_weight=max_weight,
                                show_progress=show_progress)
    return finder.sample(num_samples)[0]