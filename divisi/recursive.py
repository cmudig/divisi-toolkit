import itertools
from .subgroups import Rule, IntersectionRule, RuleFeature
from .utils import RankedList
import numpy as np
import tqdm

# function to assign values and generate combinations for selected features of a slice
def generate_values_for_feature_set(discrete_df, feature_set, positive_only=False):
    """
    A function that generates all possible numeric values for a particular feature set

    :param discrete_df: input discrete dataframe built from the raw dataset
    :param feature_set: a list of unique features for which values are to be generated
    :return: combinations of valid values for the input feature_set
    """
    ranges = []
    for feature in feature_set:
        if positive_only:
            ranges.append([1])
        else:
            ranges.append(range(discrete_df[feature].max() + 1))

    # using itertools to generate all unique combinations of n features
    combinations = list(itertools.product(*ranges))
    return combinations


# calculate scores for slices and store it in a list
def calculate_scores(discrete_df, ranking_functions, weights, feature_set, combinations, top_k_slices, scored_slices=None, min_items=None, univariate_masks=None):
    """
    Function that will calculate score for a slice and add it to top_k_slices if it has a better score

    :param discrete_df: input discrete dataframe built from the raw dataset
    :param ranking_functions: dictionary of score functions
    :param weights: dictionary of weights to multiply score functions by
    :param feature_set: a set of unique features for which slice finding will be done
    :param combinations: a set of values for each feature in feature_set considered for slice finding
    :param top_k_slices: original list of top slices that needs to be updated if required
    :param min_items: minimum number of items in a slice for it to be scored
    :return: number of slices scored
    """
    # here a combination is set of discrete values for a particular feature set
    num_scored = 0
    for combination in combinations:
        current_slice = IntersectionRule([RuleFeature(f, [val]) for f, val in zip(feature_set, combination)])
        if scored_slices is not None and current_slice in scored_slices: continue 
        mask = current_slice.make_mask(discrete_df, univariate_masks=univariate_masks)
        num_scored += 1

        if min_items is not None and mask.sum() < min_items:
            if scored_slices is not None:
                scored_slices[current_slice] = None
            continue
    
        current_slice = current_slice.rescore(
            {fn_name: fn.calculate_score(current_slice, mask, univariate_masks or {}).item()
                for fn_name, fn in ranking_functions.items()}
        )
        score = sum(weight * current_slice.score_values[fn_name]
                    for fn_name, weight in weights.items())
        top_k_slices.add(current_slice, score)
        if scored_slices is not None:
            scored_slices[current_slice] = score
    return num_scored


# function to generate all feature combinations of size m
def generate_feature_combinations(features, M):
    """
    A function that generates all possible unique feature sets considering at the most M features.
    This function is a generator function that uses yield instead of traditional return statement.
    This is done because the traditional return statement would require us to create a list and as the dataset grows
    in size, it might not be possible to hold all feature sets in memory (as features and M grows, the result
    grows exponentially)

    :param features: list of all unique features of a dataset
    :param M: maximum number of features to consider to generate a combination
    :return: yields feature_set one bye one
    """
    for feature_set in itertools.combinations(features, M):
        yield feature_set


# function to populate top_k_slices with data considering at the most M features
def populate_slices(discrete_df, ranking_functions, weights, M, top_k_slices, positive_only=False, min_items=None, scored_slices=None, univariate_masks=None):
    """
    This is a helper function that first generates all possible feature sets.
    Once all feature sets are generated, it generates all possible valid values for a particular feature set.
    And further it calls calculate_scores function that computes scores and actually populates the top_k_slices list.

    :param discrete_df: input discrete dataframe built from the raw dataset
    :param ranking_functions: dictionary of score functions
    :param weights: dictionary of weights to multiply score functions by
    :param M: maximum number of features to consider to generate a combination
    :param top_k_slices: original list of top slices that needs to be updated if required
    :param min_items: minimum number of items in a slice for it to be scored
    :return: number of slices scored
    """
    print("Slice finding for", M, "feature(s)")
    num_scored = 0
    for value in generate_feature_combinations(np.arange(discrete_df.shape[1]), M):
        combinations = generate_values_for_feature_set(discrete_df, value, positive_only=positive_only)
        num_scored += calculate_scores(discrete_df, ranking_functions, weights, value, combinations, top_k_slices, min_items=min_items, scored_slices=scored_slices, univariate_masks=univariate_masks)
    print("Done for: ", M, ", scored", num_scored, "slices")
    return num_scored

def search_subgroups_recursive(discrete_df,
                                ranking_functions, 
                                max_features_to_consider, 
                                desired_top_slice_count,
                                positive_only=False,
                                weights=None,
                                min_items=None):
    """
    Api to find top k slices considering at max m features for a dataset
    
    Example usage of the find_slices API:
    ```
    >>> slices = find_slices_recursive(df, [], 4, 10)

    >>> for a_slice in slices:
    ...    print(a_slice.score, a_slice.features, a_slice.values)
    ```

    :param discrete_df: input discrete dataframe
    :param ranking_functions: dictionary of score function names to score function
        objects
    :param max_features_to_consider: maximum number of features to consider for a particular slice
    :param desired_top_slice_count: maximum number of top slices that we are interested in
    :param weights: dictionary of weights to multiply score functions by. If not
        provided, score functions are uniformly weighted
    
    :return: a list of top desired_top_slice_count slices considering at the most max_features_to_consider features
    """

    if weights is None:
        weights = {fn_name: 1.0 for fn_name in ranking_functions}
        
    top_k_slices = RankedList(desired_top_slice_count)
    univariate_masks = {}
    scored_slices = {}
    
    # total_scored = 0
    # # populate slices from size 1 to max_features_to_consider
    # for index in range(1, max_features_to_consider + 1):
    #     total_scored += populate_slices(discrete_df, 
    #                     ranking_functions, 
    #                     weights, 
    #                     index, 
    #                     top_k_slices, 
    #                     positive_only=positive_only,
    #                     scored_slices=scored_slices,
    #                     min_items=min_items,
    #                     univariate_masks=univariate_masks)

    num_scored = 0
    
    def _find_slices_recursive(base_slice):
        nonlocal num_scored
        
        if scored_slices is not None and base_slice in scored_slices: return
        
        # Score this slice
        mask = base_slice.make_mask(discrete_df, univariate_masks=univariate_masks)
        num_scored += 1

        if min_items is not None and mask.sum() < min_items:
            if scored_slices is not None:
                scored_slices[base_slice] = None
            return
    
        base_slice = base_slice.rescore(
            {fn_name: fn.calculate_score(base_slice, mask, univariate_masks or {}).item()
                for fn_name, fn in ranking_functions.items()}
        )
        score = sum(weight * base_slice.score_values[fn_name]
                    for fn_name, weight in weights.items())
        top_k_slices.add(base_slice, score)
        if scored_slices is not None:
            scored_slices[base_slice] = score

        # Test subslices
        if len(base_slice.base_features) == max_features_to_consider:
            return
        bar = np.arange(discrete_df.shape[1]) 
        if len(base_slice.base_features) == 0: bar = tqdm.tqdm(bar)
        for new_feature in bar:
            if any(f.feature_name == new_feature for f in base_slice.base_features):
                continue
            if positive_only:
                values_to_try = [1]
            else:
                values_to_try = list(range(discrete_df[:,new_feature].max() + 1))
            for v in values_to_try:
                _find_slices_recursive(base_slice.subslice(RuleFeature(new_feature, [v])))
            
    _find_slices_recursive(IntersectionRule([]))
    return top_k_slices.items, num_scored
