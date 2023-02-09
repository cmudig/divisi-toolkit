import itertools
from old_score_functions import *


# Class to hold data about a particular slice which includes it's score, features and values for the features.
# TODO: replaces usages of this class with Slice class in slices.py
class Slice:
    def __init__(self, score, features, values):
        self.score = score
        self.features = features
        self.values = values

    def __lt__(self, other):
        return self.score < other.score


def add_to_top_k_list(top_k_list, k, item):
    """
    Adds item to a list where we want to hold only top k items

    :param top_k_list: original list that has to be updated with item
    :param k: number of maximum items that top_k_list should hold
    :param item: a new object that we wish to add to top_k_list
    :return: void
    """
    if len(top_k_list) < k:
        top_k_list.append(item)
    else:
        min_index = top_k_list.index(min(top_k_list))
        if top_k_list[min_index].score < item.score:
            top_k_list[min_index] = item


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
        ranges.append(range(discrete_df[feature].max()))

    # using itertools to generate all unique combinations of n features
    combinations = list(itertools.product(*ranges))
    return combinations


# calculate scores for slices and store it in a list
def calculate_scores(discrete_df, discrete_outcomes, feature_set, combinations, K, top_k_slices):
    """
    Function that will calculate score for a slice and add it to top_k_slices if it has a better score

    :param discrete_df: input discrete dataframe built from the raw dataset
    :param discrete_outcomes: list of a particular outcome column in the dataset
    :param feature_set: a set of unique features for which slice finding will be done
    :param combinations: a set of values for each feature in feature_set considered for slice finding
    :param K: number of maximum items that top_k_list should hold
    :param top_k_slices: original list of top slices that needs to be updated if required
    :return: void
    """
    current_slice = []

    # here a combination is set of discrete values for a particular feature set
    for combination in combinations:
        for index in range(len(feature_set)):
            if index == 0:
                current_slice = discrete_df[feature_set[index]] == combination[index]
            else:
                current_slice = current_slice & (discrete_df[feature_set[index]] == combination[index])

        if current_slice.sum() > 0:
            score = entropy_difference(discrete_outcomes, current_slice) + \
                    mean_difference_l1(discrete_outcomes, current_slice) + \
                    group_size(discrete_outcomes, current_slice)
            new_slice = Slice(score, feature_set, combination)
            add_to_top_k_list(top_k_slices, K, new_slice)


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
def populate_slices(discrete_df, discrete_outcomes, M, K, top_k_slices):
    """
    This is a helper function that first generates all possible feature sets.
    Once all feature sets are generated, it generates all possible valid values for a particular feature set.
    And further it calls calculate_scores function that computes scores and actually populates the top_k_slices list.

    :param discrete_df: input discrete dataframe built from the raw dataset
    :param discrete_outcomes: list of a particular outcome column in the dataset
    :param M: maximum number of features to consider to generate a combination
    :param K: number of maximum items that top_k_list should hold
    :param top_k_slices: original list of top slices that needs to be updated if required
    :return: void
    """
    print("Slice finding for", M, "feature(s)")
    for value in generate_feature_combinations(discrete_df.columns, M):
        combinations = generate_values_for_feature_set(discrete_df, value)
        calculate_scores(discrete_df, discrete_outcomes, value, combinations, K, top_k_slices)
    print("Done for: ", M)
