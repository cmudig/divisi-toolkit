import numpy as np
from .utils import powerset

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
        if data is not None:
            assert isinstance(data, np.ndarray), "Score function data must be of type ndarray"
            assert len(data.shape) == 1, "Score function data must be 1D"
        self.data = data

    def calculate_score(self, slice, mask, univariate_masks):
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
    
    def meta_dict(self):
        """A metadata dictionary for the score function, excluding the data."""
        base = {"type": type(self).__name__}
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        """A metadata dictionary for the score function, excluding the data."""
        score_type = meta_dict["type"]
        return globals()[score_type].from_dict(meta_dict, data)
    
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
        assert np.issubdtype(data.dtype, np.integer), "Entropy can only be calculated on integer inputs"
        self.priority = priority
        self.eps = eps
        
        self._base_entropy = self._calc_entropy(self.data)
       
    def _calc_entropy(self, discrete_vals):
        _, counts = np.unique(discrete_vals, return_counts=True)
        return -np.sum((counts / len(discrete_vals)) * np.log2(counts / len(discrete_vals)))

    def high_entropy(self, mask):
        return (self.eps + self._calc_entropy(self.data[mask])) / (self.eps + self._base_entropy)

    def low_entropy(self, mask):
        return (self.eps + self._base_entropy) / (self.eps + self._calc_entropy(self.data[mask]))

    def calculate_score(self, slice, mask, univariate_masks):
        if self.priority == 'high':
            return self.high_entropy(mask)
        return self.low_entropy(mask)
    
    def subslice(self, indexes):
        return EntropyScore(self.data[indexes], priority=self.priority, eps=self.eps)
    
    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count, univariate_masks):
        slice_hist = slice_hist[slice_hist > 0]
        slice_entropy = -np.sum((slice_hist / slice_count) * np.log2(slice_hist / slice_count))
        if np.isnan(slice_entropy):
            print(slice_hist, slice_count, np.log2(slice_hist / slice_count), (slice_hist / slice_count) * np.log2(slice_hist / slice_count))
        if self.priority == 'high':
            return (self.eps + slice_entropy) / (self.eps + self._base_entropy)
        return (self.eps + self._base_entropy) / (self.eps + slice_entropy)
    
    def meta_dict(self):
        base = super().meta_dict()
        base.update({"priority": self.priority, "eps": self.eps})
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return EntropyScore(data, priority=meta_dict["priority"], eps=meta_dict["eps"])
    
class MeanDifferenceScore(ScoreFunctionBase):
    """
    A score function that returns higher values when the absolute difference in
    means inside and outside the slice is higher.
    """

    def __init__(self, data):
        super().__init__("mean", data)
        self._std = self.data.std()
        self._mean = self.data.mean()
        
    def calculate_score(self, slice, mask, univariate_masks):
        return np.abs(self.data[mask].mean() - self._mean) / self._std
    
    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count, univariate_masks):
        return np.abs(slice_sum / slice_count - self._mean) / self._std
        
    def subslice(self, indexes):
        return MeanDifferenceScore(self.data[indexes])
    
    def meta_dict(self):
        base = super().meta_dict()
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return MeanDifferenceScore(data)
    
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

    def calculate_score(self, slice, mask, univariate_masks):
        frac = mask.sum() / len(mask)
        return np.exp(-0.5 * ((frac - self.ideal_fraction) / self.spread) ** 2)
        
    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count, univariate_masks):
        frac = slice_count / total_count
        return np.exp(-0.5 * ((frac - self.ideal_fraction) / self.spread) ** 2)
    
    def subslice(self, indexes):
        return SliceSizeScore(ideal_fraction=self.ideal_fraction, spread=self.spread)

    def meta_dict(self):
        base = super().meta_dict()
        base.update({"ideal_fraction": self.ideal_fraction, "spread": self.spread})
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return SliceSizeScore(ideal_fraction=meta_dict["ideal_fraction"], spread=meta_dict["spread"])
    

class NumFeaturesScore(ScoreFunctionBase):
    """
    A score function that penalizes slices with too many feature values
    specified, favoring simpler slices.
    """

    def __init__(self):
        super().__init__("num_features")

    def calculate_score(self, slice, mask, univariate_masks):
        return 1 / (1 + np.log2(1 + len(slice.feature_values)))
    
    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count, univariate_masks):
        return self.calculate_score(slice, None, univariate_masks)
    
    def subslice(self, indexes):
        return NumFeaturesScore()

    def meta_dict(self):
        base = super().meta_dict()
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
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
        self._mean = self.data.mean()
        
    def calculate_score(self, slice, mask, univariate_masks):
        if self.inverse: 
            return (self.eps + self._mean) / (self.eps + self.data[mask].mean())
        return (self.eps + self.data[mask].mean()) / (self.eps + self._mean)

    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count, univariate_masks):
        mean = slice_sum / slice_count
        if self.inverse: 
            return (self.eps + self._mean) / (self.eps + mean)
        return (self.eps + mean) / (self.eps + self._mean)
    
    def subslice(self, indexes):
        return OutcomeRateScore(self.data[indexes], inverse=self.inverse, eps=self.eps)

    def meta_dict(self):
        base = super().meta_dict()
        base.update({"inverse": self.inverse, "eps": self.eps})
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return OutcomeRateScore(data, inverse=meta_dict["inverse"], eps=meta_dict["eps"])
    

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
        self._sum = self.data.sum()
        
    def calculate_score(self, slice, mask, univariate_masks):
        return self.data[mask].sum() / self._sum

    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count, univariate_masks):
        return slice_sum / self._sum
    
    def subslice(self, indexes):
        return OutcomeShareScore(self.data[indexes])

    def meta_dict(self):
        base = super().meta_dict()
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return OutcomeShareScore(data)
    
class InteractionEffectScore(ScoreFunctionBase):
    """
    A score function that calculates the ratio between the outcome rate score
    of the given slice and the best outcome rate score of all superslices of the
    slice. This measures how beneficial it is to have all the features in the
    slice compared to removing some.
    """
    
    def __init__(self, data, eps=1e-6):
        super().__init__("interaction_effect", data)
        self._mean = self.data.mean()
        self.eps = eps
        
    def _superslice_score(self, masks):
        overall_mask = None
        for m in masks:
            if overall_mask is None: overall_mask = m.copy()
            else: overall_mask &= m
        return (self.eps + self.data[overall_mask].mean()) / (self.eps + self._mean)

    def calculate_score(self, slice, mask, univariate_masks):
        if len(univariate_masks) <= 1: return 1.0
        overall_effect = max(0, ((self.eps + self.data[mask].mean()) / (self.eps + self._mean)))
        itemized_effect = max(self._superslice_score(ms)
                    for ms in powerset(univariate_masks) if len(ms) > 0 and len(ms) < len(univariate_masks))
        return max(0, overall_effect / itemized_effect)
    
    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count, univariate_masks):
        if len(univariate_masks) <= 1: return 1.0
        overall_effect = max(0, ((self.eps + slice_sum / slice_count) / (self.eps + self._mean)))
        # TODO figure out if there's a way to speed up or cache superslice results
        itemized_effect = max(self._superslice_score(ms)
                    for ms in powerset(univariate_masks) if len(ms) > 0 and len(ms) < len(univariate_masks))
        return max(0, overall_effect / itemized_effect)
    
    def subslice(self, indexes):
        return InteractionEffectScore(self.data[indexes])

    def meta_dict(self):
        base = super().meta_dict()
        base["eps"] = self.eps
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return InteractionEffectScore(data, eps=meta_dict["eps"])
    

class SliceSimilarityScore(ScoreFunctionBase):
    """
    A score function whose value is higher when a given slice mask has high
    Jaccard similarity, superslice overlap, or subslice overlap to a particular
    reference slice.

    Given a reference set R, a test set S will be evaluated by the following
    equations depending on the metric parameter:
    * jaccard: size(R & S) / size(R | S)
    * subslice: size(R & S) / size(S)
    * superslice: size(R & S) / size(R)
    """
    
    def __init__(self, reference_mask, metric='jaccard'):
        super().__init__("slice_similarity", reference_mask)
        self.metric = metric
        
    def calculate_score(self, slice, mask, univariate_masks):
        intersect = (mask & self.data).sum()
        if self.metric == 'jaccard':
            union = (mask | self.data).sum()
            return intersect / union
        elif self.metric == 'subslice':
            return intersect / mask.sum()
        elif self.metric == 'superslice':
            return intersect / self.data.sum()
        raise AttributeError(f"Unsupported metric {self.metric}")
    
    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count):
        raise NotImplementedError()
    
    def subslice(self, indexes):
        return SliceSimilarityScore(self.data[indexes], metric=self.metric)

    def meta_dict(self):
        base = super().meta_dict()
        base["metric"] = self.metric
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return SliceSimilarityScore(data, metric=meta_dict["metric"])
    
