import numpy as np

class ScoreFunctionBase:
    """
    Base class for score functions that take as input a Slice object and a
    boolean mask, and return a non-negative numerical score value.
    """
    def __init__(self, score_type, data=None):
        """
        :param score_type: A string that defines a score type like 'entropy', 
            'count'
        :param data: array that defines a particular outcome column. This can be
            None if the score function does not require additional data.
        """
        self.score_type = score_type
        self.data = data

    def calculate_score(self, slice, mask):
        """
        Calculates the score for a single slice.
        
        :param slice: a `Slice` object representing the feature values used to
            determine the mask
        :param mask: a boolean array to specify whether a particular data point
            should be included or not
        :return: a float that represents calculated score values
        """

        return 0.0
    
    def subslice(self, indexes):
        """
        Returns a different score function object that corresponds to the same
        score function but computed over only the given indexes.
        
        :param indexes: A boolean or index array indicating which rows of the
            input data to use to compute the score.
            
        :return: a new score function object
        """
        return ScoreFunctionBase(self.score_type, self.data[indexes])
    
class EntropyScore(ScoreFunctionBase):
    """
    A score function that compares the entropy of an outcome within the slice to
    the entropy outside the slice. The function can be configured to prioritize
    slices with higher entropy or lower entropy using the `priority` parameter.
    """
    def __init__(self, data, priority=None, eps=1e-6):
        """
        :param data: the discrete or binned outcome data over which to calculate
            entropy
        :param priority: If 'high', score for greater entropy (broader distribution)
            inside the slice. If 'low', score for lower entropy (sharper
            distribution) inside the slice.
        :param eps: Small constant value to add to fractions
        """
        super().__init__("entropy", data)
        assert priority in (None, "low", "high")
        self.priority = priority
        self.eps = eps
       
    def _calc_entropy(self, discrete_vals):
        _, counts = np.unique(discrete_vals, return_counts=True)
        return -np.sum((counts / len(discrete_vals)) * np.log2(counts / len(discrete_vals)))
 
    def high_entropy(self, mask):
        return (self.eps + self._calc_entropy(self.data[mask])) / (self.eps + self._calc_entropy(self.data[~mask]))

    def low_entropy(self, mask):
        return (self.eps + self._calc_entropy(self.data[mask])) / (self.eps + self._calc_entropy(self.data[~mask]))

    def calculate_score(self, slice, mask):
        if self.priority == 'high':
            return self.high_entropy(mask)
        return self.low_entropy(mask)
    
    def subslice(self, indexes):
        return EntropyScore(self.data[indexes], priority=self.priority, eps=self.eps)
    
class MeanDifferenceScore(ScoreFunctionBase):
    """
    A score function that returns higher values when the absolute difference in
    means inside and outside the slice is higher.
    """
    def __init__(self, data):
        super().__init__("mean", data)
        self.std = self.data.std()
        
    def calculate_score(self, slice, mask):
        return np.abs(self.data[mask].mean() - self.data[~mask].mean()) / self.std
    
    def subslice(self, indexes):
        return MeanDifferenceScore(self.data[indexes])
    
class SliceSizeScore(ScoreFunctionBase):
    """
    A score function that returns higher values when the slice size is closer
    to a desired value. The score function is calculated using a Gaussian curve
    centered around a given fraction of the dataset.
    """
    def __init__(self, ideal_fraction=0.25, spread=0.2):
        """
        :param ideal_fraction: The fraction of the dataset that a slice should
            span to receive the highest score.
        :param spread: The standard deviation of the Gaussian curve, which
            determines how sharply slice sizes are penalized away from the
            ideal_fraction.
        """
        super().__init__("slice_size")
        self.ideal_fraction = ideal_fraction
        self.spread = spread
        
    def calculate_score(self, slice, mask):
        frac = mask.sum() / len(mask)
        return np.exp(-0.5 * ((frac - self.ideal_frac) / self.spread) ** 2)
        
    def subslice(self, indexes):
        return SliceSizeScore(ideal_fraction=self.ideal_fraction, spread=self.spread)
    
class NumFeaturesScore(ScoreFunctionBase):
    """
    A score function that penalizes slices with too many feature values
    specified, favoring simpler slices.
    """
    def __init__(self):
        super().__init__("num_features")
        
    def calculate_score(self, slice, mask):
        return 1 / np.log2(1 + len(slice.feature_values))
    
    def subslice(self, indexes):
        return NumFeaturesScore()
    
class OutcomeRateScore(ScoreFunctionBase):
    """
    A score function that compares the rate of a binary outcome within a slice
    to the rate outside the slice.
    """
    def __init__(self, data, inverse=False, eps=1e-6):
        """
        :param data: A binary outcome to compare
        :param inverse: If True, favor slices with higher outcome rates *outside*
            the slice. If False (default), favor slices with higher outcome rate
            *inside* the slice.
        :param eps: Small constant value to add to fractions
        """
        super().__init__("outcome_rate", data)
        self.inverse = inverse
        self.eps = eps
        
    def calculate_score(self, slice, mask):
        if self.inverse: 
            return (self.eps + self.data[~mask].mean()) / (self.eps + self.data[mask].mean())
        return (self.eps + self.data[mask].mean()) / (self.eps + self.data[~mask].mean())

    def subslice(self, indexes):
        return OutcomeRateScore(self.data[indexes], inverse=self.inverse, eps=self.eps)

class OutcomeShareScore(ScoreFunctionBase):
    """
    A score function that prioritizes slices that contain a higher percentage
    of the total in a set of binary outcomes. For example, if the outcome is
    error rate, slices that describe a larger portion of all errors will score
    more highly.
    """
    def __init__(self, data):
        """
        :param data: A binary outcome to compare
        """
        super().__init__("outcome_share", data)
        
    def calculate_score(self, slice, mask):
        return self.data[mask].mean() / self.data.mean()

    def subslice(self, indexes):
        return OutcomeShareScore(self.data[indexes])