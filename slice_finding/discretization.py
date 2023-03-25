import pandas as pd
import numpy as np
import scipy.sparse as sps
import tqdm

class DiscretizedData:
    def __init__(self, discrete_data, value_names):
        """
        :param discrete_data: A dataframe or array containing non-negative
            integers.
        :param value_names: A list or dictionary of tuples (col, values) where
            col is the column name, and values is a dictionary mapping 
            integer values to strings describing the original values. A list
            should be used if discrete_data is a matrix/array, and a dictionary
            with column names as keys should be used if discrete_data is a
            dataframe.
        """
        super().__init__()
        self.df = discrete_data.astype(np.uint8)
        self.value_names = value_names
        
        # Create inverse mapping from decoded values to encoded ones, to support
        # converting back user-created slices
        self.inverse_value_mapping = {}
        value_names_iter = enumerate(self.value_names) if isinstance(self.value_names, list) else self.value_names.items()
        for enc_key, (dec_key, dec_values) in value_names_iter:
            self.inverse_value_mapping[dec_key] = (enc_key, {v: k for k, v in dec_values.items()})
        
    def describe_slice(self, slice_obj):
        """
        Returns a dictionary of column-value pairs describing the given slice.
        
        :param slice_obj: A Slice to describe.
        :return: A dictionary corresponding to the slice's `feature_values`,
            but using column and value names from pre-discretization.
        """
        results = {}
        for col, val in slice_obj.feature_values.items():
            col_values = self.value_names[col]
            results[col_values[0]] = col_values[1][val]
        return results
    
    def encode_slice(self, decoded_feature_values):
        """
        Creates a Slice representing the given feature values, but converted
        back into the discretized numerical representation.
        """
        from .slices import Slice
        
        feature_values = {}
        for dec_key, dec_value in decoded_feature_values.items():
            enc_key, enc_mapping = self.inverse_value_mapping[dec_key]
            feature_values[enc_key] = enc_mapping[dec_value]
        return Slice(feature_values)
    
def _represent_bin(bins, i, quantile=False):
    if quantile:
        if i == 0:
            return f"< {bins[0] * 100:.2g}%"
        elif i == len(bins):
            return f"> {bins[-1] * 100:.2g}%"
        return f"{bins[i - 1] * 100:.2g}% - {bins[i] * 100:.2g}%"
    if i == 0:
        return f"< {bins[0]:.2g}"
    elif i == len(bins):
        return f"> {bins[-1]:.2g}"
    return f"{bins[i - 1]:.2g} - {bins[i]:.2g}"

    
def discretize_data(df, spec):
    """
    Discretizes the data according to the given set of rules.
    
    :param df: A dataframe containing possibly continuous values.
    :param spec: A dict specification of rules for each feature to discretize.
        The keys of this dictionary should be columns in the source dataframe,
        and the values should be dictionaries containing the following keys:
        - method (required): a way to discretize the data. If 'keep', then the
            values will be assumed discrete and maintained as-is. If 'bin', then
            the values will be binned using the given cutoffs. If 'unique', then
            the values will be assumed discrete but non-numeric, and converted to
            numbers. If a function is provided, it should take two arguments 
            (the column value series and the column name), and return an integer-
            valued series/array as well as an optional dictionary of number-
            value mappings.
        - bins: If method is 'bin', providing this key specifies the cutoffs for
            each discrete value. Values below the lowest bin will be set to 0,
            and values above the highest bin will be set to `len(bins)`.
        - quantiles: If method is 'bin', providing this key specifies quantiles
            at which the values will be binned. Binning follows the same rules as
            for the bins key.
            
    :return: A DiscretizedData instance representing the dataframe.
    """
    discrete_columns = {}
    column_descriptions = {}
    for col, col_spec in spec.items():
        if callable(col_spec["method"]):
            discrete_columns[col], desc = col_spec["method"](df[col], col)
            column_descriptions[col] = (col, desc)
        elif col_spec["method"] == "keep":
            discrete_columns[col] = df[col].values
            column_descriptions[col] = (col, {v: v for v in df[col].unique()})
        elif col_spec["method"] == "bin":
            if "bins" in col_spec:
                bins = np.array(col_spec["bins"])                
            elif "quantiles" in col_spec:
                bins = np.quantile(df[col], col_spec["quantiles"])
            else:
                raise ValueError("One of 'bins' or 'quantiles' must be passed for binning discretization")
            discrete_columns[col] = np.digitize(df[col], bins)
            if "names" in col_spec: 
                assert len(col_spec["names"]) == len(bins) + 1, f"Length of names for col {col} must be 1 + num bins"
                col_names = {i: col_spec["names"][i] for i in range(len(bins) + 1)}
            else:
                col_names = {i: _represent_bin(bins, i, quantile="quantiles" in col_spec)
                                              for i in range(len(bins) + 1)}
            column_descriptions[col] = (col, col_names)
        elif col_spec["method"] == "unique":
            unique_vals = sorted(df[col].unique().tolist())
            discrete_columns[col] = df[col].apply(lambda v: unique_vals.index(v))
            column_descriptions[col] = (col, {i: v for i, v in enumerate(unique_vals)})
    return DiscretizedData(pd.DataFrame(discrete_columns, index=df.index),
                           column_descriptions)

def discretize_token_sets(token_sets, token_idx_mapping=None, n_top_columns=None, max_column_mean=None, show_progress=True):
    """
    Performs data "discretization" to convert a given dataset of token sets (e.g.
    sentences) into a sparse representation suitable for slice finding. Each column
    will be 1 if the token set contains at least one token mapping to that column.
    
    :param token_sets: A list or iterable of lists of tokens.
    :param token_idx_mapping: If provided, a dictionary of tokens to index
        numbers starting from 0. This can be used to map multiple tokens to the
        same discretized feature. The number of columns in the final discretized
        data will be 1 + the maximum value in this dictionary.
    :param n_top_columns: The number of columns with the highest rate of 1s to
        keep as features.
    :param max_column_mean: If provided, columns with a mean higher than this
        value will be excluded. For instance, a max_column_mean of 0.5 means that
        columns for which over half the rows have a 1 will be excluded. This
        happens prior to selecting the n_top_columns, if applicable.
    :param show_progress: If True, show a tqdm progress bar.
        
    :return: A `DiscretizedData` object representing the text data in a sparse
        format.
    """
    # Construct a sparse matrix representation
    indptr = [0]
    indices = []
    data = []
    predefined_token_idx = token_idx_mapping is not None
    if not predefined_token_idx: token_idx_mapping = {}
    
    for token_set in tqdm.tqdm(token_sets) if show_progress else token_sets:
        if not predefined_token_idx:
            for token in token_set:
                token_idx_mapping.setdefault(token, len(token_idx_mapping))
        grouped_indices = list(set(token_idx_mapping[token] for token in token_set if token in token_idx_mapping))
        indices += grouped_indices
        data += [1] * len(grouped_indices)
        indptr.append(len(indices))
    bow_mat = sps.csr_matrix((data, indices, indptr), dtype=np.uint8)

    col_sums = np.array(bow_mat.mean(axis=0)).flatten()
    cols_to_keep = np.flip(np.argsort(col_sums))
    if max_column_mean is not None:
        excluding_cols = cols_to_keep[col_sums[cols_to_keep] >= max_column_mean]
        if show_progress:
            print(f"Excluding {len(excluding_cols)} column(s) due to max column mean constraint (max mean {col_sums.max():.3f})")
        cols_to_keep = cols_to_keep[col_sums[cols_to_keep] < max_column_mean]
    if n_top_columns is not None:
        cols_to_keep = cols_to_keep[:n_top_columns]

    bow_mat = bow_mat.tocsc()[:,cols_to_keep].tocsr()

    # Create column name mapping
    unconverted_idx_token = {} # before column filtering
    for token, idx in token_idx_mapping.items():
        unconverted_idx_token.setdefault(idx, []).append(token)
    value_mapping = {
        i: (', '.join(unconverted_idx_token[cols_to_keep[i]]), {0: 0, 1: 1})
        for i in range(len(cols_to_keep))
    }
    
    return DiscretizedData(bow_mat, value_mapping)