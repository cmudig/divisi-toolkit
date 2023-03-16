import numpy as np
import pandas as pd
from scipy import sparse as sps

class RankedList:
    """
    A helper class that maintains a list of arbitrary objects with single
    numerical scores.
    """
    def __init__(self, k, initial_items=None):
        """
        :param k: The number of items to save in the ranked list.
        :param initial_items: If provided, a list of tuples of (item, score)
            that should populate the ranked list.
        """
        self.k = k
        if initial_items is not None:
            self.items = [x[0] for x in initial_items]
            self.scores = [x[1] for x in initial_items]
        else:
            self.items = []
            self.scores = []
        
    def add(self, item, score):
        added = False
        for i, comp_score in enumerate(self.scores):
            if score > comp_score:
                self.items.insert(i, item)
                self.scores.insert(i, score)
                added = True
                break
        if not added and len(self.items) < self.k: 
            self.items.append(item)
            self.scores.append(score)
        if len(self.items) > self.k:
            self.items = self.items[:self.k]
            self.scores = self.scores[:self.k]

def pairwise_jaccard_similarities(mat):
    """
    Computes the Jaccard similarity between each row of the given sparse matrix.
    The Jaccard similarity is defined as len(x intersect y) / len(x union y),
    where x and y are sets. Each row of the matrix should contain binary values
    where a 1 defines the presence of an element in the set.
    
    :param mat: A sparse matrix of shape N x D containing binary values.
    
    :return: A dense matrix of shape N x N containing the Jaccard similarity
        (ranging from 0 to 1, where 1 is the most similar) between each pair
        of rows.
    """
    lengths = np.asarray(mat.sum(axis=1)).flatten().astype(np.uint16)
    
    # Calculate intersection of sets using dot product
    intersection = np.dot(mat, mat.T)

    # Use set trick: len(x | y) = len(x) + len(y) - len(x & y)
    length_sums = lengths[:,np.newaxis] + lengths[np.newaxis,:]
    union = np.maximum(length_sums - intersection, np.array([1], dtype=np.uint16), casting='no')
    del length_sums
    result = np.zeros((mat.shape[0], mat.shape[0]), dtype=np.float16)
    np.true_divide(intersection.todense(), union, out=result)
    return result

def make_mask(inputs, slice_obj, existing_mask=None):
    """
    Creates a binary mask representing membership in the given slice.
    
    :param inputs: a dataframe containing data points to check for membership
        in the slice
    :param slice_obj: a `Slice` object
    :param existing_mask: if provided, a binary mask that will be intersected
        with the mask for the given slice
        
    :return: a binary array where 1 indicates that a row is part of the
        slice
    """
    mask = existing_mask.copy() if existing_mask is not None else existing_mask
    for col, val in slice_obj.feature_values.items():
        if isinstance(inputs, (sps.csc_matrix, sps.csc_array)):
            if mask is None:
                mask = (inputs[:,col] == val).toarray().flatten()
            else:
                mask &= (inputs[:,col] == val).toarray().flatten()
        else:
            if mask is None:
                mask = inputs[col] == val
            else:
                mask &= inputs[col] == val
    if mask is None:
        mask = np.ones(inputs.shape[0], dtype=bool)
    if isinstance(mask, pd.Series): mask = mask.values
    return mask
    
def detect_data_type(arr):
    """
    :param arr: An array to check the type of
    :return: 'binary' if the data is 0/1, 'categorical' if contains a small number
        of unique values or is non-numeric, or 'continuous' if contains a large
        number of numerical values
    """
    if arr.dtype == np.dtype('object'):
        return 'categorical'
    uniques = np.unique(arr)
    if len(uniques) == 2 and np.allclose(uniques, np.arange(2)):
        return 'binary'
    
    if len(uniques) < 5:
        return 'categorical'
    
    return 'continuous'

def convert_to_native_types(o):
    if isinstance(o, dict):
        return {convert_to_native_types(k): convert_to_native_types(v) for k, v in o.items()}
    elif isinstance(o, list):
        return [convert_to_native_types(v) for v in o]
    elif isinstance(o, np.generic):
        return o.item()
    return o