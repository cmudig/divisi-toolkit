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
        
    def __contains__(self, col_name):
        return col_name in self.inverse_value_mapping
    
    def __len__(self):
        return len(self.df)
    
    def column_names(self):
        return list(self.inverse_value_mapping.keys())
    
    def filter(self, mask):
        """Returns a new DiscretizedData with only the rows matching the given mask."""
        return DiscretizedData(self.df[mask], self.value_names)
    
    def describe_slice(self, slice_obj):
        """
        Returns a dictionary representing the structure of the given slice with
        pre-discretization feature and value names.
        
        :param slice_obj: A Slice to describe.
        :return: A dictionary corresponding to the slice's `feature_values`,
            but using column and value names from pre-discretization.
        """
        from .slices import SliceFeature

        def transform(feature):
            col_values = self.value_names[feature.feature_name]
            transformed_values = []
            for val in feature.allowed_values:
                if val not in col_values[1]:
                    raise KeyError(f"{val} not in value map for {col_values[0]} ({feature.feature_name}): {col_values[1]}")
                transformed_values.append(col_values[1][val])
            return SliceFeature(col_values[0], transformed_values)
        return slice_obj.feature.transform_features(transform).to_dict()
    
    def encode_slice(self, decoded_feature_values):
        """
        Creates a Slice representing the given feature value dictionary, but
        converted back into the discretized numerical representation.
        """
        from .slices import Slice, SliceFeatureBase, SliceFeature
        
        described_slice = SliceFeatureBase.from_dict(decoded_feature_values)
        def invert(feature):
            enc_key, enc_mapping = self.inverse_value_mapping[feature.feature_name]
            return SliceFeature(enc_key, [enc_mapping[dec_value] for dec_value in feature.allowed_values])
        
        return Slice(described_slice.transform_features(invert))
    
    def encode_filter(self, filter_obj):
        """
        Converts the given slice filter object to use feature and value names
        in the discretized numerical representation.
        """
        
        from .filters import (ExcludeIfAny, 
                              ExcludeIfAll,
                              ExcludeFeatureValue, 
                              ExcludeFeatureValueSet, 
                              IncludeOnlyFeatureValue, 
                              IncludeOnlyFeatureValueSet,
                              SliceFilterBase)
        
        def replacer(f):
            if isinstance(f, (ExcludeFeatureValue, IncludeOnlyFeatureValue)):
                feature_name = f.feature
                if feature_name not in self.inverse_value_mapping:
                    return SliceFilterBase()
                enc_key, enc_values = self.inverse_value_mapping[feature_name]
                return type(f)(enc_key, enc_values[f.value])
            elif isinstance(f, (ExcludeFeatureValueSet, IncludeOnlyFeatureValueSet)):
                features = f.features
                allowed_values = f.values
                encoded_allowed = {}
                for feature in features:
                    if feature not in self.inverse_value_mapping: continue
                    enc_key, enc_values = self.inverse_value_mapping[feature]
                    f_allowed_vals = tuple(sorted(enc_values[v] for v in allowed_values if v in enc_values))
                    if f_allowed_vals not in encoded_allowed:
                        encoded_allowed[f_allowed_vals] = type(f)([enc_key], f_allowed_vals)
                    else:
                        existing_filter = encoded_allowed[f_allowed_vals]
                        encoded_allowed[f_allowed_vals] = type(f)([*existing_filter.features, enc_key], f_allowed_vals)
                if len(encoded_allowed) == 0:
                    return SliceFilterBase()
                elif len(encoded_allowed) == 1:
                    return list(encoded_allowed.values())[0]
                elif isinstance(f, ExcludeFeatureValueSet):
                    return ExcludeIfAny(list(encoded_allowed.values()))
                elif isinstance(f, IncludeOnlyFeatureValueSet):
                    return ExcludeIfAll(list(encoded_allowed.values()))
                
        return filter_obj.replace(replacer)
    
    def decode_filter(self, filter_obj):
        """
        Converts the given slice filter object to use feature and value names
        in the original non-numerical representation.
        """
        
        from .filters import (ExcludeIfAny, 
                              ExcludeIfAll,
                              ExcludeFeatureValue, 
                              ExcludeFeatureValueSet, 
                              IncludeOnlyFeatureValue, 
                              IncludeOnlyFeatureValueSet)
        
        def replacer(f):
            if isinstance(f, (ExcludeFeatureValue, IncludeOnlyFeatureValue)):
                feature_name = f.feature
                dec_key, dec_values = self.value_names[feature_name]
                return type(f)(dec_key, dec_values[f.value])
            elif isinstance(f, (ExcludeFeatureValueSet, IncludeOnlyFeatureValueSet)):
                features = f.features
                allowed_values = f.values
                decoded_allowed = {}
                for feature in features:
                    dec_key, dec_values = self.value_names[feature]
                    f_allowed_vals = tuple(sorted(dec_values[v] for v in allowed_values if v in dec_values))
                    if f_allowed_vals not in decoded_allowed:
                        decoded_allowed[f_allowed_vals] = type(f)([dec_key], f_allowed_vals)
                    else:
                        existing_filter = decoded_allowed[f_allowed_vals]
                        decoded_allowed[f_allowed_vals] = type(f)([*existing_filter.features, dec_key], f_allowed_vals)
                if len(decoded_allowed) == 1:
                    return list(decoded_allowed.values())[0]
                elif isinstance(f, ExcludeFeatureValueSet):
                    return ExcludeIfAny(list(decoded_allowed.values()))
                elif isinstance(f, IncludeOnlyFeatureValueSet):
                    return ExcludeIfAll(list(decoded_allowed.values()))
                
        return filter_obj.replace(replacer)
    
def _represent_bin(bins, i, quantile=False):
    if quantile:
        if i == 0:
            return f"< {bins[0] * 100:.5g}%"
        elif i == len(bins):
            return f"> {bins[-1] * 100:.5g}%"
        return f"{bins[i - 1] * 100:.5g}% - {bins[i] * 100:.5g}%"
    if i == 0:
        return f"< {bins[0]:.5g}"
    elif i == len(bins):
        return f"> {bins[-1]:.5g}"
    return f"{bins[i - 1]:.5g} - {bins[i]:.5g}"

def discretize_column(column_name, column_data, col_spec):
    if callable(col_spec["method"]):
        result, desc = col_spec["method"](column_data, column_name)
        column_desc = (column_name, desc)
    elif col_spec["method"] == "keep":
        result = column_data.values
        column_desc = (column_name, {v: v for v in column_data.unique()})
    elif col_spec["method"] == "bin":
        if "bins" in col_spec:
            bins = np.array(col_spec["bins"])                
        elif "quantiles" in col_spec:
            bins = np.quantile(column_data, col_spec["quantiles"])
        else:
            raise ValueError("One of 'bins' or 'quantiles' must be passed for binning discretization")
        result = np.digitize(column_data, bins)
        if "names" in col_spec: 
            assert len(col_spec["names"]) == len(bins) + 1, f"Length of names for col {column_name} must be 1 + num bins"
            col_names = {i: col_spec["names"][i] for i in range(len(bins) + 1)}
        else:
            col_names = {i: _represent_bin(bins, i, quantile="quantiles" in col_spec)
                                        for i in range(len(bins) + 1)}
        if "nan_name" in col_spec:
            # Set the nan value to the max plus one
            result[pd.isna(column_data)] = len(bins) + 1
            col_names[len(bins) + 1] = col_spec["nan_name"]
            
        column_desc = (column_name, col_names)
    elif col_spec["method"] == "unique":
        codes, uniques = pd.factorize(column_data.astype(str), sort=True)
        unique_vals = sorted(uniques)
        result = np.where(pd.isna(column_data), np.nan, codes)
        col_names = {i: v for i, v in enumerate(uniques)}
        
        if "nan_name" in col_spec:
            # Set the nan value to the max plus one
            result[pd.isna(column_data)] = len(uniques)
            col_names[len(unique_vals)] = col_spec["nan_name"]
        column_desc = (column_name, col_names)
    
    return result, column_desc
    
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
    discrete_columns = np.zeros((len(df), len(spec)), dtype=np.uint8)
    column_descriptions = {}
    for col_idx, (col, col_spec) in enumerate(spec.items()):
        try:
            discrete_columns[:,col_idx], column_descriptions[col_idx] = discretize_column(col, df[col], col_spec)
        except Exception as e:
            raise ValueError(f"Error discretizing column '{col}': {e}")
    return DiscretizedData(discrete_columns,
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

def concat_discrete_dfs(dfs):
    """
    Creates a new discrete dataframe containing the columns from all of the given
    discrete dataframes. Sparse matrix representations will be converted to dense.
    """
    mats = []
    value_names = {}
    for df in dfs:
        if isinstance(df.df, sps.csr_matrix):
            mats.append(np.array(df.df.toarray(), dtype=np.uint8))
        else:
            mats.append(df.df)
        value_names.update({i + len(value_names): v for i, v in df.value_names.items()})
    return DiscretizedData(np.hstack(mats), value_names)