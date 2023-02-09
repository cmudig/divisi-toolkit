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
    scored_slices = []
    # Maintain a ranking for each function separately, as different slices may
    # maximize different functions
    best_groups = {fn_name: RankedList(num_candidates, [(Slice({}, {}), -1e9)])
                   for fn_name in score_fns}

    # Iterate over the columns max_features times
    for col_size in range(max_features):
        saved_groups = set([g for _, gset in best_groups.items() for g in gset.items])
        for base_slice in saved_groups:
            for col in inputs.columns:
                # Skip if we've already looked at this column
                if col in base_slice and base_slice[col] == source_row[col]: continue
                
                new_slice = base_slice.subslice(col, source_row[col])
                
                # Skip if we've seen this slice or the user wants to filter it out
                if new_slice in seen_slices: continue
                if group_filter is not None and not group_filter(new_slice): continue
                seen_slices.add(new_slice)
                if len(seen_slices) % 10000 == 0: print("Seen {} groups".format(len(seen_slices)))

                # Generate a mask for the slice and score it
                mask = make_mask(inputs, new_slice)
                if mask.sum() < min_items: continue
                for key, scorer in score_fns.items():
                    new_slice.score_values[key] = scorer.calculate_score(new_slice, mask)
                scored_slices.append(new_slice)
                
                for fn_name in score_fns:
                    # Add to each ranking the score where only the current score
                    # function's value is maximized
                    score = sum((max_weight if f == fn_name else min_weight) * new_slice.score_values[f] for f in score_fns)
                    best_groups[fn_name].add(new_slice, score)

    return scored_slices

def find_slices_by_sampling(inputs, 
                            score_fns, 
                            source_mask=None, 
                            group_filter=None, 
                            max_features=3, 
                            min_items=100, 
                            num_samples=10, 
                            num_candidates=20,
                            holdout_fraction=0.5,
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
        from. A separate top-k list is maintained for each score function.
    :param holdout_fraction: Proportion of the dataset that will be kept for
        final slice scoring.
    :param min_weight: The minimum weight that will be used to calculate a score
        value from an individual score function.
    :param max_weight: The maximum weight that will be used to calculate a score
        value from an individual score function.
    :param show_progress: If True, show a tqdm progress bar during computation.
    
    :return: a `RankedSliceList` object containing the identified slices.
    """
    all_scores = []
    seen_slices = set()
    
    discovery_mask = (np.random.uniform(size=len(inputs)) > holdout_fraction)
    if source_mask is not None:
        if isinstance(source_mask, pd.Series):
            source_mask = source_mask.values
        source_mask &= discovery_mask
        sample_idxs = np.random.choice(np.argwhere(source_mask).flatten(), 
                                       size=num_samples, 
                                       replace=False)
    else:
        sample_idxs = np.random.choice(np.arange(len(inputs))[discovery_mask], 
                                       size=num_samples, 
                                       replace=False)
        
    bar = tqdm.tqdm(sample_idxs) if show_progress else sample_idxs
    # Use only score functions within the discovery subset of the data
    discovery_score_fns = {fn_name: fn.subslice(discovery_mask)
                           for fn_name, fn in score_fns.items()}
    for sample_idx in bar:
        source_row = inputs.iloc[sample_idx]
        all_scores += explore_groups_beam_search(inputs[discovery_mask].reset_index(drop=True),
                                                 source_row,
                                                 discovery_score_fns,
                                                 seen_slices=seen_slices,
                                                 group_filter=group_filter,
                                                 max_features=max_features,
                                                 min_items=min_items,
                                                 num_candidates=num_candidates,
                                                 min_weight=min_weight,
                                                 max_weight=max_weight)
        
    return RankedSliceList(list(set(all_scores)),
                           inputs,
                           score_fns,
                           eval_indexes=~discovery_mask,
                           min_weight=min_weight,
                           max_weight=max_weight)