class Slice:
    def __init__(self, feature_values, score_values=None):
        """

        :param feature_values: dictionary of feature to value mappings
        :param score_values: dictionary of score function to score values
        """
        self.feature_values = feature_values
        self.score_values = score_values or {}
        
        # create a tuple representation that can be hashed
        tuple_keys = tuple(*sorted(self.feature_values.keys()))
        self.tuple_rep = (tuple_keys, tuple([self.feature_values[c] for c in tuple_keys]))
        
    def __hash__(self):
        return hash(self.tuple_rep)
    
    def __eq__(self, other):
        return isinstance(other, Slice) and other.tuple_rep == self.tuple_rep
    
    def __ne__(self, other):
        return not self.__eq__(other)
    
    def subslice(self, other_feature, other_value):
        """
        Creates a new Slice object with the given feature and value added.
        """
        return Slice({**self.feature_values, other_feature: other_value})
    
    def __contains__(self, feature):
        return feature in self.feature_values

    def __getitem__(self, feature):
        return self.feature_values[feature]
        
class RankedSliceList:
    def __init__(self, results, score_functions, eval_indexes=None):
        """
        :param results: A list of Slice objects representing the results of a
            slice-finding operation
        :param score_functions: A dictionary of score names to score function
            objects
        """
        self.results = results
        self.score_functions = score_functions
        self.eval_indexes = eval_indexes
        self.weights = {fn_name: 1.0 for fn_name in score_functions.keys()}
