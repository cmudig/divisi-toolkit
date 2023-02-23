from scipy.sparse import csr_matrix
import numpy as np
import pandas as pd
from .utils import pairwise_jaccard_similarities, make_mask, detect_data_type, convert_to_native_types
from .discretization import DiscretizedData

class Slice:
    def __init__(self, feature_values, score_values=None):
        """

        :param feature_values: dictionary of feature to value mappings
        :param score_values: dictionary of score function to score values
        """
        self.feature_values = feature_values
        self.score_values = score_values or {}
        
        # create a tuple representation that can be hashed
        tuple_keys = tuple(sorted(self.feature_values.keys()))
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
        
    def rescore(self, new_scores):
        """
        Returns a Slice object with identical feature values but a new dictionary
        of scores.
        """
        return Slice(self.feature_values, new_scores)

    def __str__(self):
        base = "<Slice: "
        base += ", ".join(f"{feature}: {value}" for feature, value in self.feature_values.items())
        if self.score_values:
            base += "; scores: "
            base += ", ".join(f"{score_name}: {value}" for score_name, value in self.score_values.items())
        base += ">"
        return base

    def __repr__(self):
        return str(self)
    
    def string_rep(self):
        return str(self.tuple_rep)

class RankedSliceList:
    """
    A type that manages a list of slices and associated scores. When the
    `RankedSliceList` is initialized, it contains results that are determined
    from a discovery set of points. When the `rank` method is called, the best
    slices are re-scored using an evaluation set of points (ideally held out
    from the discovery set), and ranked according to a given set of weights.
    This re-ranking process can be performed efficiently after the initial
    slice-finding operation.
    """
    
    def __init__(self, results, data, score_functions, eval_indexes=None, min_weight=0.0, max_weight=5.0, similarity_threshold=0.9):
        """
        :param results: A list of Slice objects representing the results of a
            slice-finding operation
        :param data: The original discrete-valued dataframe or DiscretizedData
            used to compute scores
        :param score_functions: A dictionary of score names to score function
            objects
        :param similarity_threshold: Slices that have a higher Jaccard similarity
            than this threshold to already-returned slices will be omitted.
        """
        self.results = results
        self.data = data
        self.df = data.df if hasattr(data, 'df') else data
        self.eval_indexes = eval_indexes
        if eval_indexes is not None:
            if isinstance(self.df, pd.DataFrame):
                self.eval_df = self.df.iloc[self.eval_indexes].reset_index(drop=True)
            else:
                self.eval_df = self.df[self.eval_indexes]
                if isinstance(self.eval_df, csr_matrix):
                    self.eval_df = self.eval_df.tocsc()
            self.score_functions = {fn_name: fn.subslice(self.eval_indexes)
                                    for fn_name, fn in score_functions.items()}
            self.eval_mask = self.eval_indexes
        else:
            self.eval_df = self.df
            self.score_functions = score_functions
            self.eval_mask = np.arange(self.df.shape[0])
            
        self.min_weight = min_weight
        self.max_weight = max_weight
        self.train_scores = pd.DataFrame([r.score_values for r in self.results])
        self.similarity_threshold = similarity_threshold

    def _rank_weighted_indexes(self, score_df, weights, k=None):
        """
        Computes the top indexes of a given score dataframe using the
        given dictionary of weights.
        """
        weighted_score = np.zeros(len(score_df))
        for w_name, w in weights.items():
            weighted_score += w * score_df[w_name]
        results = np.flip(np.argsort(weighted_score.values))
        if k is not None:
            results = results[:k]
        return results
    
    def encode_slice(self, feature_values):
        """
        Returns a discretized version of the slice defined by the given feature
        values.
        """
        try:
            return self.data.encode_slice(feature_values)
        except AttributeError:
            return Slice(feature_values)
        
    def score_slice(self, slice_obj, return_mask=False):
        mask = make_mask(self.eval_df, slice_obj)
        group_scores = {key: item.calculate_score(slice_obj, mask)
                        for key, item in self.score_functions.items()}
        if return_mask:
            return group_scores, mask
        return group_scores
        
    def rescore(self, result_indexes, return_masks=False):
        """
        Computes new evaluation-data scores for the results at the given indexes.
        
        :param result_indexes: An iterable of numerical index values to retrieve
            results from `self.results`.
        :param return_masks: If True, also return a sparse matrix of the masks
            used to compute scores on the eval data.
            
        :return: A tuple of (slices, scores) and optionally masks, where slices
            is a list of `Slice` objects, scores is a dataframe of eval scores
            according to each score function, and masks is a sparse csr_matrix
            of binary masks for each slice.
        """
        eval_scored_slices = []
        eval_scores = []
        if return_masks:
            mask_indptr = [0]
            mask_indices = []

        for result_idx in result_indexes:
            slice_obj = self.results[result_idx]
            group_scores, mask = self.score_slice(slice_obj, return_mask=True)
            
            eval_scores.append(group_scores)
            eval_scored_slices.append(slice_obj.rescore(group_scores))
            
            if return_masks:
                mask_indptr.append(mask_indptr[-1] + mask.sum())
                mask_indices.append(np.argwhere(mask).flatten())
            
        eval_scores = pd.DataFrame(eval_scores)
        
        result = (eval_scored_slices, eval_scores)
        if return_masks:
            mask_indices = np.concatenate(mask_indices)
            mask_mat = csr_matrix((np.ones(len(mask_indices), dtype=np.uint16),
                                mask_indices,
                                mask_indptr), dtype=np.uint16)
            return (*result, mask_mat)
        return result
        
    def rank(self, weights, num_to_rescore=100, n_slices=10, similarity_threshold=None):
        """
        Ranks and returns the top slices according to a given set of weights,
        filtering results that contain a very similar set of instances.
        
        :param weights: A dictionary mapping score function names to weight
            values. The weights must be within the `min_weight` and `max_weight` 
            used to calculate the original scores.
        :param num_to_rescore: The number of top-scoring slices from the
            discovery stage to re-score using the held-out evaluation data.
        :param n_slices: The number of slices to return.
        :param similarity_threshold: Slices that have a higher Jaccard similarity
            than this threshold to already-returned slices will be omitted.
        
        :return: A list of Slice objects with scores from the held-out
            evaluation data.
        """
        
        if not self.results:
            return []
        
        # Get the top num_to_rescore using the training scores
        top_train_indexes = self._rank_weighted_indexes(self.train_scores, weights, num_to_rescore)

        # Rescore these using evaluation data and rank
        eval_scored_slices, eval_scores, mask_mat = self.rescore(top_train_indexes, return_masks=True)
        top_eval_indexes = self._rank_weighted_indexes(eval_scores, weights)

        # Remove results with too-high jaccard similarity
        mask_similarities = pairwise_jaccard_similarities(mask_mat)
        ranked_result_idxs = []
        skip_idxs = set()
        for i in top_eval_indexes:
            if i in skip_idxs: continue
            ranked_result_idxs.append(i)
            sim_thresh = similarity_threshold if similarity_threshold is not None else self.similarity_threshold
            skip_idxs |= set(np.argwhere(mask_similarities[i] >= sim_thresh).flatten().tolist())

        # Return top n_slices results
        ranked_results = [eval_scored_slices[i] for i in ranked_result_idxs]
        return ranked_results[:min(len(ranked_results), n_slices)]
    
    def generate_slice_description(self, slice_obj, metrics=None):
        """
        Creates JSON-serializable slice descriptions for a slice.
        
        :param slice: A Slice object
        :param metrics: If provided, a dictionary mapping metric names to
            series/arrays matching the shape of the original inputs. These metrics
            will be aggregated (histogram for continuous values, mean for
            binary values, value counts for categorical values)
        :return: A dictionary containing metadata and user-readable
            descriptions for the slice.
        """
        slice_desc = {
            "scoreValues": slice_obj.score_values, 
            "rawFeatureValues": slice_obj.feature_values,
            "stringRep": slice_obj.string_rep()
        }
        try:
            slice_desc["featureValues"] = self.data.describe_slice(slice_obj)
        except AttributeError:
            slice_desc["featureValues"] = slice_obj.feature_values
            
        slice_metrics = {}
        mask = np.arange(self.df.shape[0])[self.eval_mask][make_mask(self.eval_df, slice_obj)]
        slice_metrics["Count"] = {"type": "count", "count": len(mask), "share": len(mask) / self.eval_df.shape[0]}
        if metrics:
            for metric_name, data in metrics.items():
                if isinstance(data, dict):
                    # User-specified options
                    options = data
                    data = options["data"]
                else:
                    options = {}
                data_type = options.get("type", detect_data_type(data))
                if data_type == "binary":
                    slice_metrics[metric_name] = {"type": data_type, 
                                                  "mean": data[mask].mean(), 
                                                  "share": data[mask].sum() / data[self.eval_mask].sum()}
                elif data_type == "categorical":
                    slice_metrics[metric_name] = {"type": data_type, 
                                                  "counts": dict(zip(*np.unique(data[mask], return_counts=True)))}
                else:
                    if "bins" in options:
                        hist_bins = options["bins"]
                    else:
                        # Calculate the range of the data and choose an appropriate
                        # scale for the bin size
                        min_val = data.min()
                        max_val = data.max()
                        data_range = max_val - min_val
                        bin_scale = np.floor(np.log10(data_range))
                        upper_tol = 2 if (np.ceil(max_val / (10 ** bin_scale))) * (10 ** bin_scale) == max_val else 1
                        hist_bins = np.arange(np.floor(min_val / (10 ** bin_scale)) * (10 ** bin_scale),
                                              (np.ceil(max_val / (10 ** bin_scale)) + upper_tol) * (10 ** bin_scale),
                                              10 ** bin_scale)
                    hist_values, _ = np.histogram(data[mask], bins=hist_bins)
                    slice_metrics[metric_name] = {"type": data_type,
                                                  "hist": dict(zip(hist_bins, hist_values)),
                                                  "mean": data[mask].mean()}
        slice_desc["metrics"] = slice_metrics
            
        return convert_to_native_types(slice_desc)
