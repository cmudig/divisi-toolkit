import pandas as pd
import numpy as np
from .scores import ScoreFunction

def find_slices(df, score_functions, max_features=3, n_slices=10, algorithm='recursive'):
    """
    Performs slice-finding on the given discrete dataframe, optimizing for a
    set of ScoreFunction objects.
    
    :param df: A dataframe of discretized features.
    :param score_functions: A dict mapping score function names to score function
        objects.
    :param max_features: The maximum number of feature values allowed in a slice.
        Lower values make the algorithm run faster.
    :param n_slices: The number of slices to return. Lower values make the
        algorithm run faster.
    :param algorithm: Which method to use to compute the slices. Allowed values
        include "recursive", "sliceline", and "sampling".
    
    :return: a `RankedSliceList` object containing the resulting top `n_slices`
        slices.
    """
    
    # Check inputs
    for col in df.columns:
        if not np.issubdtype(df[col].dtype, np.floating):
            raise ValueError(f"Dataframe column '{col}' has floating point dtype which is unsupported")
    
    if algorithm.lower() == 'recursive':
        assert False, "Recursive algorithm not yet implemented"
    elif algorithm.lower() == 'sliceline':
        assert False, "SliceLine algorithm not yet implemented"
    elif algorithm.lower() == 'sampling':
        assert False, "Sampling algorithm not yet implemented"
    else:
        raise ValueError(f"Unsupported algorithm '{algorithm}'")
    

