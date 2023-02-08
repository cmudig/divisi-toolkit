class ScoreFunction:
    def __init__(self, score_type, data):
        """

        :param score_type: a string that defines a score type like entropy, count
        :param data: array that defines a particular outcome column
        """
        self.score_type = score_type
        self.data = data

    def calculate_score(self, mask) :
        """

        :param mask: a boolean array to specify whether a particular feature has to included or not
        :return: a float that represents calculated score values
        """

        return 0.0