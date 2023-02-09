from .sampling import find_slices_by_sampling
from .scores import *

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
    
    :return: a `RankedSliceList` object containing the resulting top `n_slices`
        slices.
    """
    import pandas as pd
    import numpy as np
    
    # Check inputs
    for col in df.columns:
        if np.issubdtype(df[col].dtype, np.floating):
            raise ValueError(f"Dataframe column '{col}' has floating point dtype which is unsupported")
    
    if algorithm.lower() == 'recursive':
        assert False, "Recursive algorithm not yet implemented"
    elif algorithm.lower() == 'sliceline':
        assert False, "SliceLine algorithm not yet implemented"
    elif algorithm.lower() == 'sampling':
        return find_slices_by_sampling(
            df,
            score_functions,
            **kwargs
        )
    else:
        raise ValueError(f"Unsupported algorithm '{algorithm}'")
    

