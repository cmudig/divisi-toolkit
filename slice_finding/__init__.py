from .sampling import find_slices_by_sampling
from .recursive import find_slices_recursive
from .scores import *
from scipy import sparse as sps
import numpy as np

def find_slices(df, score_functions, max_features=3, min_weight=0.0, max_weight=5.0, algorithm='recursive', **kwargs):
    """
    Performs slice-finding on the given discrete dataframe, optimizing for a
    set of ScoreFunction objects.
    
    :param df: A dataframe of discretized features.
    :param score_functions: A dict mapping score function names to score function
        objects.
    :param max_features: The maximum number of feature values allowed in a slice.
        Lower values make the algorithm run faster.
    :param min_weight: The minimum weight that will be used to calculate a score
        value from an individual score function.
    :param max_weight: The maximum weight that will be used to calculate a score
        value from an individual score function.
    :param algorithm: Which method to use to compute the slices. Allowed values
        include "recursive", "sliceline", and "sampling".
    :param n_slices: Number of top slices to return, required for 'recursive'
        algorithm
    :param weights: Weights on the score functions, which will be used to
        precompute fixed rankings if provided. The 'recursive' algorithm always
        returns fixed rankings, and weights are set to 1.0 if not provided.
    
    :return: if weights is provided or algorithm is 'recursive', a list of
        top slices. Otherwise, a `RankedSliceList` object on which the `rank`
        method returns a list of top slices according to a given weighting.
    """
    import pandas as pd
    import numpy as np
    
    # Check inputs
    if isinstance(df, pd.DataFrame):
        for col in df.columns:
            if np.issubdtype(df[col].dtype, np.floating):
                raise ValueError(f"Dataframe column '{col}' has floating point dtype which is unsupported")
    elif isinstance(df, np.ndarray):
        if np.issubdtype(df.dtype, np.floating):
            raise ValueError(f"Input array has floating point dtype which is unsupported")
    elif isinstance(df, sps.csr_matrix):
        if df.max() > 1:
            raise ValueError("Sparse matrices must be binary")
    else:
        raise ValueError("Unsupported type for df, must be dataframe or csr_matrix")
    
    if algorithm.lower() == 'recursive':
        assert 'n_slices' in kwargs, "n_slices parameter must be passed to find_slices for recursive algorithm"
        n_slices = kwargs['n_slices']
        del kwargs['n_slices']
        return find_slices_recursive(
            df,
            score_functions,
            max_features,
            n_slices,
            **kwargs
        )
    elif algorithm.lower() == 'sliceline':
        assert False, "SliceLine algorithm not yet implemented"
    elif algorithm.lower() == 'sampling':
        results = find_slices_by_sampling(
            df,
            score_functions,
            max_features=max_features,
            **{k: v for k, v in kwargs.items() if k not in ('weights', 'n_slices')}
        )
        if 'weights' in kwargs:
            return results.rank(kwargs['weights'], n_slices=kwargs.get('n_slices', 10))
        return results
    else:
        raise ValueError(f"Unsupported algorithm '{algorithm}'")
    

