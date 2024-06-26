import itertools
from .slices import Slice
from .utils import RankedList


# function to assign values and generate combinations for selected features of a slice
def generate_values_for_feature_set(discrete_df, feature_set):
    """
    A function that generates all possible numeric values for a particular feature set

    :param discrete_df: input discrete dataframe built from the raw dataset
    :param feature_set: a list of unique features for which values are to be generated
    :return: combinations of valid values for the input feature_set
    """
    ranges = []
    for feature in feature_set:
        ranges.append(range(discrete_df[feature].max() + 1))

    # using itertools to generate all unique combinations of n features
    combinations = list(itertools.product(*ranges))
    return combinations


# calculate scores for slices and store it in a list
def calculate_scores(discrete_df, score_functions, weights, feature_set, combinations, top_k_slices, min_items=None):
    """
    Function that will calculate score for a slice and add it to top_k_slices if it has a better score

    :param discrete_df: input discrete dataframe built from the raw dataset
    :param score_functions: dictionary of score functions
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
        current_slice = Slice(dict(zip(feature_set, combination)))
        mask = current_slice.make_mask(discrete_df)
        num_scored += 1

        if min_items is None or mask.sum() >= min_items:
            current_slice = current_slice.rescore(
                {fn_name: fn.calculate_score(current_slice, mask)
                 for fn_name, fn in score_functions.items()}
            )
            score = sum(weight * current_slice.score_values[fn_name]
                        for fn_name, weight in weights.items())
            top_k_slices.add(current_slice, score)
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
def populate_slices(discrete_df, score_functions, weights, M, top_k_slices, min_items=None):
    """
    This is a helper function that first generates all possible feature sets.
    Once all feature sets are generated, it generates all possible valid values for a particular feature set.
    And further it calls calculate_scores function that computes scores and actually populates the top_k_slices list.

    :param discrete_df: input discrete dataframe built from the raw dataset
    :param score_functions: dictionary of score functions
    :param weights: dictionary of weights to multiply score functions by
    :param M: maximum number of features to consider to generate a combination
    :param top_k_slices: original list of top slices that needs to be updated if required
    :param min_items: minimum number of items in a slice for it to be scored
    :return: number of slices scored
    """
    print("Slice finding for", M, "feature(s)")
    num_scored = 0
    for value in generate_feature_combinations(discrete_df.columns, M):
        combinations = generate_values_for_feature_set(discrete_df, value)
        num_scored += calculate_scores(discrete_df, score_functions, weights, value, combinations, top_k_slices, min_items=min_items)
    print("Done for: ", M, ", scored", num_scored, "slices")
    return num_scored


def find_slices_recursive(discrete_df,
                          score_functions, 
                          max_features_to_consider, 
                          desired_top_slice_count,
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
    :param score_functions: dictionary of score function names to score function
        objects
    :param max_features_to_consider: maximum number of features to consider for a particular slice
    :param desired_top_slice_count: maximum number of top slices that we are interested in
    :param weights: dictionary of weights to multiply score functions by. If not
        provided, score functions are uniformly weighted
    
    :return: a list of top desired_top_slice_count slices considering at the most max_features_to_consider features
    """

    if weights is None:
        weights = {fn_name: 1.0 for fn_name in score_functions}
        
    top_k_slices = RankedList(desired_top_slice_count)

    # populate slices from size 1 to max_features_to_consider
    for index in range(1, max_features_to_consider + 1):
        populate_slices(discrete_df, 
                        score_functions, 
                        weights, 
                        index, 
                        top_k_slices, 
                        min_items=min_items)

    return top_k_slices.items
