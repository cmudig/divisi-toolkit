class Slice:
    def __init__(self, feature_values, score_values):
        """

        :param feature_values: dictionary of feature to value mappings
        :param score_values: dictionary of score function to score values
        """
        self.feature_values = feature_values
        self.score_values = score_values
