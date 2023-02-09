from recursive import populate_slices


def find_slices(discrete_df, discrete_outcomes, max_features_to_consider, desired_top_slice_count):
    """
    Api to find top k slices considering at max m features for a dataset

    :param discrete_df: input discrete dataframe
    :param discrete_outcomes: list of a particular outcome column in the dataset
    :param max_features_to_consider: maximum number of features to consider for a particular slice
    :param desired_top_slice_count: maximum number of top slices that we are interested in
    :return: a list of top desired_top_slice_count slices considering at the most max_features_to_consider features
    """

    top_k_slices = []

    # populate slices from size 1 to max_features_to_consider
    for index in range(1, max_features_to_consider + 1):
        populate_slices(discrete_df, discrete_outcomes, index, desired_top_slice_count, top_k_slices)

    # descending sorting of top_k_slices list
    top_k_slices.sort(key=lambda x: x.score, reverse=True)

    return top_k_slices


# Example usage of the find_slices API
slices = find_slices(None, [], 4, 10)

for a_slice in slices:
    print(a_slice.score, a_slice.features, a_slice.values)
