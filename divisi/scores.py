import numpy as np
import torch
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
            assert isinstance(data, (np.ndarray, torch.Tensor)), "Score function data must be of type ndarray or Tensor"
            assert len(data.shape) == 1, "Score function data must be 1D"
            self.data = data if isinstance(data, torch.Tensor) else torch.from_numpy(data)
        else:
            self.data = None
        self.device = 'cpu'

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
        return ScoreFunctionBase(self.score_type, self.data[indexes]).to(self.device)
    
    def meta_dict(self):
        """A metadata dictionary for the score function, excluding the data."""
        base = {"type": type(self).__name__, "device": str(self.device)}
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        """A metadata dictionary for the score function, excluding the data."""
        score_type = meta_dict["type"]
        return globals()[score_type].from_dict(meta_dict, data).to(meta_dict["device"])
    
    def to(self, device):
        """Transfers all tensors to the given device."""
        self.device = device
        for attr, value in self.__dict__.items():
            if isinstance(value, torch.Tensor):
                setattr(self, attr, value.to(device))
        return self
    
    @classmethod
    def from_configuration(cls, meta_dict, metrics):
        """"Builds a score function object from the given configuration object and dictionary of metrics."""        
        score_type = meta_dict["type"]
        return globals()[score_type].from_configuration(meta_dict, metrics)
    
def parse_metric_expression(expr, metrics):
    """Creates a data object representing the result of the given expression by
    replacing angle-bracket-enclosed metric names with the metric values and
    evaluating the expression."""
    local_vars = {}
    for name, data in metrics.items():
        if isinstance(data, dict): data = data["data"]
        random_id = 'var_' + str(np.random.randint(0, 1e15))        
        local_vars[random_id] = data
        expr = expr.replace(f"{{{name}}}", random_id)
    return eval(expr.replace("!", "~"), {}, local_vars)
    
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
        assert not torch.is_floating_point(self.data), "Entropy can only be calculated on integer inputs"
        self.priority = priority
        self.eps = eps
        
        self._unique_vals = torch.unique(self.data)
        self._val_one_hot = self.data.unsqueeze(-1) == self._unique_vals
        self._base_entropy = self._calc_entropy(self.data)
       
    def _calc_entropy(self, mask):
        counts = (self._val_one_hot.unsqueeze(2).transpose(0, 1) * mask.view(mask.shape[0], -1)).transpose(0, 1).sum(0)
        return -torch.sum((counts / self.data.shape[0]) * torch.log2(counts / self.data.shape[0]), 0)

    def high_entropy(self, mask):
        return (self.eps + self._calc_entropy(mask)) / (self.eps + self._base_entropy)

    def low_entropy(self, mask):
        return (self.eps + self._base_entropy) / (self.eps + self._calc_entropy(mask))

    def calculate_score(self, slice, mask, univariate_masks):
        if self.priority == 'high':
            return self.high_entropy(mask)
        return self.low_entropy(mask)
    
    def subslice(self, indexes):
        return EntropyScore(self.data[indexes], priority=self.priority, eps=self.eps).to(self.device)
    
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
    
    @classmethod
    def from_configuration(cls, meta_dict, metrics):
        metric = parse_metric_expression(meta_dict["metric"], metrics)
        return EntropyScore(metric, priority=meta_dict.get("priority", None), eps=meta_dict.get("eps", 1e-6))
    
def _nanvar(tensor, dim=None, keepdim=False):
    tensor_mean = tensor.nanmean(dim=dim, keepdim=True)
    output = (tensor - tensor_mean).square().nanmean(dim=dim, keepdim=keepdim)
    return output

def _nanstd(tensor, dim=None, keepdim=False):
    output = _nanvar(tensor, dim=dim, keepdim=keepdim)
    output = output.sqrt()
    return output

class MeanDifferenceScore(ScoreFunctionBase):
    """
    A score function that returns higher values when the absolute difference in
    means inside and outside the slice is higher.
    """

    def __init__(self, data):
        super().__init__("mean", data)
        self.data = self.data.float()
        self._std = _nanstd(self.data)
        self._mean = torch.nanmean(self.data)
        
    def calculate_score(self, slice, mask, univariate_masks):
        return torch.abs((self.data.unsqueeze(-1) * mask.view(mask.shape[0], -1)).nanmean(0) - self._mean) / self._std
    
    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count, univariate_masks):
        return np.abs(slice_sum / slice_count - self._mean) / self._std
        
    def subslice(self, indexes):
        return MeanDifferenceScore(self.data[indexes]).to(self.device)
    
    def meta_dict(self):
        base = super().meta_dict()
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return MeanDifferenceScore(data)
    
    @classmethod
    def from_configuration(cls, meta_dict, metrics):
        metric = parse_metric_expression(meta_dict["metric"], metrics)
        return MeanDifferenceScore(metric)
    
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
        frac = mask.sum(0) / mask.shape[0]
        return torch.exp(-0.5 * ((frac - self.ideal_fraction) / self.spread) ** 2)
        
    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count, univariate_masks):
        frac = slice_count / total_count
        return np.exp(-0.5 * ((frac - self.ideal_fraction) / self.spread) ** 2)
    
    def subslice(self, indexes):
        return SliceSizeScore(ideal_fraction=self.ideal_fraction, spread=self.spread).to(self.device)

    def meta_dict(self):
        base = super().meta_dict()
        base.update({"ideal_fraction": self.ideal_fraction, "spread": self.spread})
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return SliceSizeScore(ideal_fraction=meta_dict["ideal_fraction"], spread=meta_dict["spread"])
    
    @classmethod
    def from_configuration(cls, meta_dict, metrics):
        return SliceSizeScore(ideal_fraction=meta_dict.get("ideal_fraction", 0.25), spread=meta_dict.get("spread", 0.2))

class NumFeaturesScore(ScoreFunctionBase):
    """
    A score function that penalizes slices with too many feature values
    specified, favoring simpler slices.
    """

    def __init__(self):
        super().__init__("num_features")

    def calculate_score(self, slice, mask, univariate_masks):
        return 1 / (1 + np.log2(1 + slice.feature.num_univariate_features))
    
    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count, univariate_masks):
        return self.calculate_score(slice, None, univariate_masks)
    
    def subslice(self, indexes):
        return NumFeaturesScore().to(self.device)

    def meta_dict(self):
        base = super().meta_dict()
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return NumFeaturesScore()
    
    @classmethod
    def from_configuration(cls, meta_dict, metrics):
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
        self.data = self.data.float()
        self.inverse = inverse
        self.eps = eps
        self._mean = torch.nanmean(self.data)
        self._present_mask = ~torch.isnan(self.data)
        
    def calculate_score(self, slice, mask, univariate_masks):
        mask = mask.view(mask.shape[0], -1)
        mask_mean = torch.nansum(self.data.unsqueeze(-1) * mask, 0) / torch.logical_and(mask, self._present_mask.unsqueeze(-1)).sum(0)
        if self.inverse: 
            return (self.eps + self._mean) / (self.eps + mask_mean)
        return (self.eps + mask_mean) / (self.eps + self._mean)

    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count, univariate_masks):
        mean = slice_sum / slice_count
        if self.inverse: 
            return (self.eps + self._mean) / (self.eps + mean)
        return (self.eps + mean) / (self.eps + self._mean)
    
    def subslice(self, indexes):
        return OutcomeRateScore(self.data[indexes], inverse=self.inverse, eps=self.eps).to(self.device)

    def meta_dict(self):
        base = super().meta_dict()
        base.update({"inverse": self.inverse, "eps": self.eps})
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return OutcomeRateScore(data, inverse=meta_dict["inverse"], eps=meta_dict["eps"])
    
    @classmethod
    def from_configuration(cls, meta_dict, metrics):
        metric = parse_metric_expression(meta_dict["metric"], metrics)
        return OutcomeRateScore(metric, inverse=meta_dict.get("inverse", False), eps=meta_dict.get("eps", 1e-6))

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
        self.data = self.data.float()
        self._sum = torch.nansum(self.data)
        
    def calculate_score(self, slice, mask, univariate_masks):
        return torch.nansum(self.data.unsqueeze(-1) * mask.view(mask.shape[0], -1), 0) / self._sum

    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count, univariate_masks):
        return slice_sum / self._sum
    
    def subslice(self, indexes):
        return OutcomeShareScore(self.data[indexes]).to(self.device)

    def meta_dict(self):
        base = super().meta_dict()
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return OutcomeShareScore(data)
    
    @classmethod
    def from_configuration(cls, meta_dict, metrics):
        metric = parse_metric_expression(meta_dict["metric"], metrics)
        return OutcomeShareScore(metric)

# map from # features to matrix where rows are mask indexes and columns are 
# positions in the return mask matrix where each mask should be applied. for
# example, for 3 features:
# [[ 1 0 0 1 1 0 ]
#  [ 0 1 0 1 0 1 ]
#  [ 0 0 1 0 1 1 ]]

MASK_POSITIONS = {} 
    
def _build_superslice_mask(masks): 
    """Builds a mask matrix where each column is a combination of subsets of
    masks in the provided list. The last column of the mask matrix corresponds
    to the full intersection of all the masks."""   
    if len(masks) not in MASK_POSITIONS:
        # Cache mask positions so we can easily construct the superslice mask
        pset = list(powerset(np.arange(len(masks))))
        MASK_POSITIONS[len(masks)] = np.array([
            [i in x for x in pset if len(x) > 0]
            for i in range(len(masks))
        ])
        
    mask_pos = MASK_POSITIONS[len(masks)]
    mask_mat = torch.ones((*masks[0].shape, 2 ** len(masks) - 1), dtype=torch.bool)
    for i, m in enumerate(masks):
        mask_mat[...,mask_pos[i]] &= m.unsqueeze(-1)
    return mask_mat

class InteractionEffectScore(ScoreFunctionBase):
    """
    A score function that calculates the ratio between the outcome rate score
    of the given slice and the best outcome rate score of all superslices of the
    slice. This measures how beneficial it is to have all the features in the
    slice compared to removing some.
    """
    
    def __init__(self, data, eps=1e-6):
        super().__init__("interaction_effect", data)
        self.data = self.data.float()
        self._mean = torch.nanmean(self.data)
        self.eps = eps
        self._present_mask = ~torch.isnan(self.data)
        
    def _superslice_score(self, masks):
        overall_mask = None
        for m in masks:
            if overall_mask is None: overall_mask = m.view(m.shape[0], -1)
            else: overall_mask = torch.logical_and(overall_mask, m.view(m.shape[0], -1))
        return (self.eps + torch.nansum(self.data.unsqueeze(-1) * overall_mask.view(overall_mask.shape[0], -1), 0) / 
                torch.logical_and(overall_mask, self._present_mask.unsqueeze(-1)).sum(0)) / (self.eps + self._mean)

    def calculate_score(self, slice, mask, univariate_masks):
        # if len(univariate_masks) <= 1: return torch.ones(mask.view(mask.shape[0], -1).shape[1]).to(self.device)
        # mask_mat = _build_superslice_mask(univariate_masks)
        # if len(mask_mat.shape) == 3:
        #     itemized_effects = torch.maximum(torch.tensor(0).to(self.device), 
        #                                 ((self.eps + torch.nansum(self.data.unsqueeze(-1).unsqueeze(-1) * mask_mat, 0) / mask_mat.sum(0)) / 
        #                                  (self.eps + self._mean)))
        #     overall_effect = itemized_effects[:,-1]
        # else:
        #     itemized_effects = torch.maximum(torch.tensor(0).to(self.device), 
        #                                 ((self.eps + torch.nansum(self.data.unsqueeze(-1) * mask_mat, 0) / mask_mat.sum(0)) / 
        #                                  (self.eps + self._mean)))
        #     overall_effect = itemized_effects[-1]
        # return torch.maximum(torch.tensor(0).to(self.device), overall_effect / itemized_effects.max(-1).values)        
        if len(univariate_masks) <= 1: return torch.ones(mask.view(mask.shape[0], -1).shape[1]).to(self.device)
        mask = mask.view(mask.shape[0], -1)
        overall_effect = torch.maximum(torch.tensor(0).to(self.device), 
                                       ((self.eps + torch.nansum(self.data.unsqueeze(-1) * mask, 0) / torch.logical_and(mask, self._present_mask.unsqueeze(-1)).sum(0)) / (self.eps + self._mean)))
        itemized_effect = torch.stack([self._superslice_score(ms)
                    for ms in powerset(univariate_masks) if len(ms) > 0 and len(ms) < len(univariate_masks)]).max(0).values
        return torch.maximum(torch.tensor(0).to(self.device), overall_effect / itemized_effect)
    
    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count, univariate_masks):
        if len(univariate_masks) <= 1: return 1.0
        overall_effect = max(0, ((self.eps + slice_sum / slice_count) / (self.eps + self._mean)))
        # TODO figure out if there's a way to speed up or cache superslice results
        itemized_effect = max(self._superslice_score(ms)
                    for ms in powerset(univariate_masks) if len(ms) > 0 and len(ms) < len(univariate_masks))
        return max(0, overall_effect / itemized_effect)
    
    def subslice(self, indexes):
        return InteractionEffectScore(self.data[indexes]).to(self.device)

    def meta_dict(self):
        base = super().meta_dict()
        base["eps"] = self.eps
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return InteractionEffectScore(data, eps=meta_dict["eps"])
    
    @classmethod
    def from_configuration(cls, meta_dict, metrics):
        metric = parse_metric_expression(meta_dict["metric"], metrics)
        return InteractionEffectScore(metric, eps=meta_dict.get("eps", 1e-6))


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
        self.data = self.data.float()
        self.metric = metric
        
    def calculate_score(self, slice, mask, univariate_masks):
        intersect = (mask.view(mask.shape[0], -1) * self.data.unsqueeze(-1) > 0).sum(0)
        if self.metric == 'jaccard':
            union = (mask.view(mask.shape[0], -1) + self.data.unsqueeze(-1) > 0).sum(0)
            return intersect / union
        elif self.metric == 'subslice':
            return intersect / mask.sum(0)
        elif self.metric == 'superslice':
            return intersect / self.data.sum(0)
        raise AttributeError(f"Unsupported metric {self.metric}")
    
    def calculate_score_fast(self, slice, slice_sum, slice_hist, slice_count, total_count):
        raise NotImplementedError()
    
    def subslice(self, indexes):
        return SliceSimilarityScore(self.data[indexes], metric=self.metric).to(self.device)

    def meta_dict(self):
        base = super().meta_dict()
        base["metric"] = self.metric
        return base
    
    @classmethod
    def from_dict(cls, meta_dict, data):
        return SliceSimilarityScore(data, metric=meta_dict["metric"])
    
    @classmethod
    def from_configuration(cls, meta_dict, metrics):
        metric = parse_metric_expression(meta_dict["mask"], metrics)
        return SliceSimilarityScore(metric, metric=meta_dict.get("similarity_type", 'jaccard'))
