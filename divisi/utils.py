import numpy as np
import pandas as pd
from scipy import sparse as sps
from itertools import chain, combinations

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
        self.items = []
        self.scores = []
        if initial_items is not None:
            for x in initial_items:
                self.add(x[0], x[1])
        
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
    uniques = uniques[~pd.isna(uniques)]
    if len(uniques) == 2 and (np.issubdtype(uniques.dtype, np.number) or np.issubdtype(uniques.dtype, np.bool_)) and np.allclose(uniques, np.arange(2)):
        return 'binary'
    
    if len(uniques) < 5:
        return 'categorical'
    
    return 'continuous'

def convert_to_native_types(o):
    if isinstance(o, dict):
        return {convert_to_native_types(k): convert_to_native_types(v) for k, v in o.items()}
    elif isinstance(o, (list, tuple, np.ndarray)):
        return [convert_to_native_types(v) for v in o]
    elif isinstance(o, (float, int)) and np.isnan(o):
        return None
    elif isinstance(o, float):
        return round(o, 6)
    elif isinstance(o, np.generic):
        v = o.item()
        if isinstance(v, float): return round(v, 6)
        return v
    return o

def powerset(iterable):
    "powerset([1,2,3]) --> () (1,) (2,) (3,) (1,2) (1,3) (2,3) (1,2,3)"
    s = list(iterable)
    return chain.from_iterable(combinations(s, r) for r in range(len(s)+1))
