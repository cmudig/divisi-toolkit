from scipy.sparse import csr_matrix
import numpy as np
import pandas as pd
from .utils import pairwise_jaccard_similarities, make_mask

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
    
    def __init__(self, results, df, score_functions, eval_indexes=None, min_weight=0.0, max_weight=5.0):
        """
        :param results: A list of Slice objects representing the results of a
            slice-finding operation
        :param df: The original discrete-valued dataframe used to compute scores
        :param score_functions: A dictionary of score names to score function
            objects
        """
        self.results = results
        self.df = df
        self.eval_indexes = eval_indexes
        if eval_indexes is not None:
            self.eval_df = self.df.iloc[self.eval_indexes].reset_index(drop=True)
            self.score_functions = {fn_name: fn.subslice(self.eval_indexes)
                                    for fn_name, fn in score_functions.items()}
        else:
            self.eval_df = self.df
            self.score_functions = score_functions
            
        self.min_weight = min_weight
        self.max_weight = max_weight
        self.train_scores = pd.DataFrame([r.score_values for r in self.results])

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
            mask = make_mask(self.eval_df, slice_obj).values
            group_scores = {key: item.calculate_score(slice_obj, mask)
                            for key, item in self.score_functions.items()}
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
        
    def rank(self, weights, num_to_rescore=100, n_slices=10, similarity_threshold=0.9):
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
        
        # Get the top num_to_rescore using the training scores
        top_train_indexes = self._rank_weighted_indexes(self.train_scores, weights, num_to_rescore)

        # Rescore these using evaluation data and rank
        eval_scored_slices, eval_scores, mask_mat = self.rescore(top_train_indexes)
        top_eval_indexes = self._rank_weighted_indexes(eval_scores, weights)

        # Remove results with too-high jaccard similarity
        mask_similarities = pairwise_jaccard_similarities(mask_mat)
        ranked_result_idxs = []
        skip_idxs = set()
        for i in top_eval_indexes:
            if i in skip_idxs: continue
            ranked_result_idxs.append(i)
            skip_idxs |= set(np.argwhere(mask_similarities[i] >= similarity_threshold).flatten().tolist())

        # Return top n_slices results
        ranked_results = [eval_scored_slices[i] for i in ranked_result_idxs]
        return ranked_results[:min(len(ranked_results), n_slices)]