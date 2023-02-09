class Slice:
    def __init__(self, feature_values, score_values):
        """

        :param feature_values: dictionary of feature to value mappings
        :param score_values: dictionary of score function to score values
        """
        self.feature_values = feature_values
        self.score_values = score_values


class RankedSliceList:
    def __init__(self, results, score_functions):
        """
        :param results: A list of Slice objects representing the results of a
            slice-finding operation
        :param score_functions: A dictionary of score names to score function
            objects
        """
        self.results = results
        self.score_functions = score_functions
        self.weights = {fn_name: 1.0 for fn_name in score_functions.keys()}
