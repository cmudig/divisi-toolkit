import pandas as pd
import numpy as np
import scipy.sparse as sps
import tqdm
import pickle
from .projections import Projection
from .utils import detect_data_type
import hashlib

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
            
        self.projections = {} # map from method to Projection object
        self._one_hot_matrix = None
        self._one_hot_labels = None
        
    def rename_columns(self, new_names):
        """new_names should be a dictionary of old names to new names"""
        return DiscretizedData(self.df, {i: (new_names.get(c, c), v) for i, (c, v) in self.value_names.items()})
    
    def describe_column(self, col_name):
        return f"{col_name}: " + ", ".join(f"{raw} - '{value}' ({(self.df[:,self.inverse_value_mapping[col_name][0]] == raw).mean():.2%})"
                                           for value, raw in self.inverse_value_mapping[col_name][1].items())
        
    def __repr__(self):
        return "<DiscretizedData:\n\t" + "\n\t".join(self.describe_column(c) for c in self.inverse_value_mapping) + "\n>"
        
    @staticmethod
    def concat(dfs):
        """Concatenates the discrete dataframes horizontally. Assumes all column
        names in the datasets are unique."""
        new_value_names = {}
        current_index = 0
        for d in dfs:
            new_value_names = {**new_value_names, **{i + current_index: item for i, item in d.value_names.items()}}
            current_index = len(new_value_names)
        if all(isinstance(d.df, sps.csr_matrix) for d in dfs):
            return DiscretizedData(sps.hstack([d.df for d in dfs]),
                                new_value_names)
        dfs = [
            DiscretizedData(np.array(d.df.todense()), d.value_names) if isinstance(d.df, sps.csr_matrix) else d
            for d in dfs
        ]
        return DiscretizedData(np.hstack([d.df for d in dfs]),
                            new_value_names)
        
    def get_hash(self):
        """
        Returns a hash digest of the data and value names.
        """
        batch_size = 1000
        hasher = hashlib.sha256()
        for i in range(0, self.df.shape[0], batch_size):
            hasher.update(self.df[i:i+batch_size].tobytes())
        hasher.update(pickle.dumps(self.value_names))
        return hasher.hexdigest()
        
    def __contains__(self, col_name):
        return col_name in self.inverse_value_mapping
    
    def __len__(self):
        return self.df.shape[0]
    
    def column_names(self):
        return list(self.inverse_value_mapping.keys())
    
    def filter(self, mask):
        """Returns a new DiscretizedData with only the rows matching the given mask."""
        return DiscretizedData(self.df[mask], self.value_names)
    
    def decode_rule(self, slice_obj):
        """
        Returns a Rule representing the structure of the given rule with
        pre-discretization feature and value names.
        
        :param slice_obj: A Rule to describe.
        :return: A Rule corresponding to the same slice,
            but using column and value names from pre-discretization.
        """
        from .subgroups import RuleFeature, Rule, RuleFeatureBase

        if isinstance(slice_obj, Rule):
            slice_obj = slice_obj.feature
        elif isinstance(slice_obj, dict):
            slice_obj = RuleFeatureBase.from_dict(slice_obj)
            
        def transform(feature):
            col_values = self.value_names[feature.feature_name]
            transformed_values = []
            for val in feature.allowed_values:
                if val not in col_values[1]:
                    raise KeyError(f"{val} not in value map for {col_values[0]} ({feature.feature_name}): {col_values[1]}")
                transformed_values.append(col_values[1][val])
            return RuleFeature(col_values[0], transformed_values)
        return Rule(slice_obj.transform_features(transform))
    
    def encode_rule(self, decoded_feature_values):
        """
        Creates a Rule representing the given feature value dictionary or Rule, but
        converted back into the discretized numerical representation.
        """
        from .subgroups import Rule, RuleFeatureBase, RuleFeature
        
        if isinstance(decoded_feature_values, Rule):
            described_slice = decoded_feature_values.feature
        elif isinstance(decoded_feature_values, dict):
            described_slice = RuleFeatureBase.from_dict(decoded_feature_values)
            
        def invert(feature):
            enc_key, enc_mapping = self.inverse_value_mapping[feature.feature_name]
            return RuleFeature(enc_key, [enc_mapping[dec_value] for dec_value in feature.allowed_values])
        
        return Rule(described_slice.transform_features(invert))
    
    def mask_for_rule(self, rule, encoded=False, univariate_masks=None):
        """
        Generates a numpy array masking the data according to the given rule.
        
        :param rule: the Rule instance to generate a mask for 
        :param encoded: If True, assumes the rule already uses indices in the
            discretized dataframe, otherwise converts the rule.
        :param univariate_masks: A dictionary that enables caching of single-
            feature masks. Create a dictionary variable and pass to this method
            if computing many masks on the same dataset.
        """
        from .subgroups import Rule, RuleFeatureBase, RuleFeature
        
        if not encoded:
            rule = self.encode_rule(rule)
        elif isinstance(rule, RuleFeatureBase):
            rule = Rule(rule)
        elif isinstance(rule, dict):
            rule = Rule(RuleFeatureBase.from_dict(rule))
            
        return rule.make_mask(self.df, univariate_masks=univariate_masks).cpu().numpy()
        
    def encode_filter(self, filter_obj):
        """
        Converts the given slice filter object to use feature and value names
        in the discretized numerical representation.
        """
        
        from .filters import (ExcludeIfAny, 
                              ExcludeIfAll,
                              ExcludeFeatureValueSet, 
                              IncludeOnlyFeatureValueSet,
                              RuleFilterBase)
        
        def replacer(f):
            if not isinstance(f, (ExcludeFeatureValueSet, IncludeOnlyFeatureValueSet)):
                return
            features = f.features
            allowed_values = f.values
            encoded_allowed = {}
            for feature in features:
                if feature not in self.inverse_value_mapping: continue
                enc_key, enc_values = self.inverse_value_mapping[feature]
                f_allowed_vals = tuple(sorted(enc_values[v] for v in allowed_values if v in enc_values))
                if not f_allowed_vals: continue
                if f_allowed_vals not in encoded_allowed:
                    encoded_allowed[f_allowed_vals] = type(f)([enc_key], f_allowed_vals)
                else:
                    existing_filter = encoded_allowed[f_allowed_vals]
                    encoded_allowed[f_allowed_vals] = type(f)([*existing_filter.features, enc_key], f_allowed_vals)
            if len(encoded_allowed) == 0:
                return RuleFilterBase()
            elif len(encoded_allowed) == 1:
                return list(encoded_allowed.values())[0]
            else:
                encoded_allowed = list(encoded_allowed.values())
                result = encoded_allowed[0]
                for encoded_child in encoded_allowed[1:]:
                    if isinstance(f, ExcludeFeatureValueSet):
                        result = ExcludeIfAny(result, encoded_child)
                    elif isinstance(f, IncludeOnlyFeatureValueSet):
                        result = ExcludeIfAll(result, encoded_child)
                return result
                
        return filter_obj.replace(replacer)
    
    def decode_filter(self, filter_obj):
        """
        Converts the given slice filter object to use feature and value names
        in the original non-numerical representation.
        """
        
        from .filters import (ExcludeIfAny, 
                              ExcludeIfAll,
                              ExcludeFeatureValueSet, 
                              IncludeOnlyFeatureValueSet)
        
        def replacer(f):
            if not isinstance(f, (ExcludeFeatureValueSet, IncludeOnlyFeatureValueSet)):
                return
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
            else:
                decoded_allowed = list(decoded_allowed.values())
                result = decoded_allowed[0]
                for decoded_child in decoded_allowed[1:]:
                    if isinstance(f, ExcludeFeatureValueSet):
                        result = ExcludeIfAny(result, decoded_child)
                    elif isinstance(f, IncludeOnlyFeatureValueSet):
                        result = ExcludeIfAll(result, decoded_child)
                return result
                
        return filter_obj.replace(replacer)
    
    def filter_single_values(self):
        """
        Creates a filter to exclude any columns that only have one unique value.
        """
        from .filters import ExcludeIfAny, ExcludeFeatureValueSet
        # Exclude any features that have only one value
        single_value_filters = {}
        for col_idx, (col, value_pairs) in self.value_names.items():
            unique_vals = np.unique(self.df[:,col_idx])
            if len(unique_vals) <= 1:
                single_value_filters.setdefault(unique_vals[0], []).append(col_idx)
                
        if single_value_filters:
            single_value_filters = [ExcludeFeatureValueSet(cols, [v]) for v, cols in single_value_filters.items()]
            result = single_value_filters[0]
            for child in single_value_filters[1:]:
                result = ExcludeIfAny(result, child)
            return result
        return None

    @property
    def one_hot_matrix(self):
        if self._one_hot_matrix is None:
            if isinstance(self.df, sps.csr_matrix):
                self._one_hot_matrix = np.array(self.df.todense())
            else:
                self._one_hot_matrix = np.hstack([
                    np.vstack([self.df[:,i] == x for x in sorted(self.value_names[i][1].keys())]).T
                    for i in range(self.df.shape[1])
                ])
        return self._one_hot_matrix
    
    @property
    def one_hot_labels(self):
        if self._one_hot_labels is None:
            if isinstance(self.df, sps.csr_matrix):
                self._one_hot_labels = [
                    f"{self.value_names[i][0]}"
                    for i in range(self.df.shape[1])
                ]
            else:
                self._one_hot_labels = [
                    f"{self.value_names[i][0]} = {self.value_names[i][1][x]}"
                    for i in range(self.df.shape[1])
                    for x in sorted(self.value_names[i][1].keys())
                ]
        return self._one_hot_labels
    
    def get_projection(self, method='tsne'):
        """
        Creates a Projection if it does not already exist, using the given method.
        """
        if method not in self.projections:    
            if method == 'pca':
                from sklearn.decomposition import PCA
                coords = PCA(n_components=2).fit_transform(self.one_hot_matrix)
            else:
                if self.one_hot_matrix.shape[1] > 100:
                    from sklearn.decomposition import TruncatedSVD
                    lo_d = TruncatedSVD(n_components=100).fit_transform(self.one_hot_matrix)
                else:
                    lo_d = self.one_hot_matrix
                if method.lower() == 'tsne':
                    from sklearn.manifold import TSNE
                    coords = TSNE(verbose=False, metric='cosine').fit_transform(lo_d)
                elif method.lower() == 'umap':
                    try:
                        from umap import UMAP
                    except:
                        raise ValueError("Package 'umap-learn' required to use method 'umap'")
                    else:
                        coords = UMAP().fit_transform(lo_d)                
                else:
                    raise ValueError(f"Unsupported projection method '{method}'")
                
            coords = (coords - coords.min(axis=0)) / (coords.max(axis=0) - coords.min(axis=0))
            self.projections[method] = Projection(coords.astype(np.float32), method=method)
            
        return self.projections[method]
        
    def save(self, filepath, save_projections=True):
        """Saves the DiscretizedData to file. A pickle file containing
        the discretized dataframe and any associated projections (if save_projections
        is True) is saved."""
        with open(filepath, 'wb') as file:
            pickle.dump({
                "df": self.df,
                "value_names": self.value_names,
                **({"projections": {n: proj.coords for n, proj in self.projections.items()}}
                   if save_projections else {})
            }, file)
            
    @classmethod
    def load(cls, filepath):
        """Loads a DiscretizedData from a pickle file."""
        with open(filepath, 'rb') as file:
            data = pickle.load(file)
            dd = cls(data["df"], data["value_names"])
            if "projections" in data:
                dd.projections = {method: Projection(coords) for method, coords in data["projections"].items()}
        return dd
    
def _represent_bin(bins, i, quantile=False):
    # if quantile:
    #     if i == 0:
    #         return f"< {bins[0] * 100:.5g}%"
    #     elif i == len(bins):
    #         return f"> {bins[-1] * 100:.5g}%"
    #     return f"{bins[i - 1] * 100:.5g}% - {bins[i] * 100:.5g}%"
    if i == 0:
        return f"< {bins[0]:.5g}"
    elif i == len(bins):
        return f"> {bins[-1]:.5g}"
    return f"{bins[i - 1]:.5g} - {bins[i]:.5g}"

def discretize_column(column_name, column_data, col_spec):
    if callable(col_spec["method"]):
        function_result = col_spec["method"](column_data, column_name)
        if isinstance(function_result, tuple):
            result, desc = function_result
        else:
            result = function_result
            desc = {v: v for v in np.unique(result)}
        assert np.issubdtype(result.dtype, np.integer), "Value results for custom discretization function must be integers"
        column_desc = (column_name, desc)
    elif col_spec["method"] == "keep":
        result = column_data.values
        assert np.issubdtype(result.dtype, np.integer), "Values must be integers for column with method 'keep'"
        column_desc = (column_name, {v: v for v in column_data.unique()})
    elif col_spec["method"] == "bin":
        if "bins" in col_spec:
            if isinstance(col_spec["bins"], (list, np.ndarray)):
                bins = np.array(col_spec["bins"])                
            else:
                assert col_spec["bins"] > 1, "Number of bins must be greater than 1"
                min_val = np.nanmin(column_data)
                max_val = np.nanmax(column_data)
                data_range = max_val - min_val
                bin_scale = np.floor(np.log10(data_range))
                print(min_val, max_val, data_range, bin_scale)
                min_val = np.floor(min_val / (10 ** bin_scale)) * (10 ** bin_scale)
                max_val = np.ceil(max_val / (10 ** bin_scale)) * (10 ** bin_scale)
                if col_spec.get("log", False):
                    bins = 10 ** np.histogram_bin_edges(np.log10(column_data), 
                                                  bins=col_spec["bins"], 
                                                  range=(np.log10(min_val), np.log10(max_val)))
                else:
                    bins = np.histogram_bin_edges(column_data, bins=col_spec["bins"], range=(min_val, max_val))
                print(min_val, max_val, bins)
                bins = bins[1:-1]

        elif "quantiles" in col_spec:
            if isinstance(col_spec["quantiles"], (list, np.ndarray)):
                bins = np.quantile(column_data, col_spec["quantiles"])
            else:
                bins = np.quantile(column_data, np.linspace(0, 1, col_spec["quantiles"] + 1)[1:-1])
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
            nan_mask = pd.isna(column_data)
            if nan_mask.sum() > 0:
                # Set the nan value to the max plus one
                result[nan_mask] = len(bins) + 1
                col_names[len(bins) + 1] = col_spec["nan_name"]
            
        column_desc = (column_name, col_names)
    elif col_spec["method"] == "unique":
        codes, uniques = pd.factorize(column_data.astype(str), sort=True)
        unique_vals = sorted(uniques)
        nan_mask = pd.isna(column_data)
        result = np.where(nan_mask, np.nan, codes)
        col_names = {i: v for i, v in enumerate(uniques)}
        
        if "nan_name" in col_spec and nan_mask.sum() > 0:
            # Set the nan value to the max plus one
            result[nan_mask] = len(uniques)
            col_names[len(unique_vals)] = col_spec["nan_name"]
        column_desc = (column_name, col_names)
    
    return result, column_desc
    
def keep_values():
    return {"method": "keep"}

def unique_values(nan_name=None):
    return {"method": "unique", **({"nan_name": nan_name} if nan_name is not None else {})}

def bin_values(bins=None, quantiles=None, names=None, log=False, nan_name=None):
    """
    bins or quantiles should be either an integer (to choose evenly spaced bins
    or quantiles) or an array of numerical bins. The first and last bin/quantile
    cutoffs are open. If names is provided, it should have exactly one more 
    value than the number of bins or quantiles to correspond to the open first
    and last bins.
    """
    assert (bins is not None) != (quantiles is not None), "Exactly one of bins or quantiles must be provided"
    return {"method": "bin", 
            "log": log,
            **({"bins": bins} if bins is not None else {"quantiles": quantiles}),
            **({"names": names} if names is not None else {}),
            **({"nan_name": nan_name} if nan_name is not None else {})}
    
def transform_values(func):
    """
    The provided function should take two arguments: the column value series 
    and the column name. It should return an integer-valued series/array, or a 
    tuple containing the integer-valued series/array and a dictionary of mappings
    from numbers in the array to human-readable labels.
    """
    return {"method": func}
    
def discretize_data(df, custom_cols=None, spec=None, remove_cols=None, sparse=False):
    """
    Discretizes the data either automatically or according to the given set of 
    rules. Automatic discretization works by keeping the unique values for any
    categorical/string columns or columns with at most 5 unique values, and
    binning other numerical columns into 5 bins using a histogram strategy.
    
    :param df: A dataframe containing possibly continuous values.
    :param custom_cols: A dictionary of column names to discretization methods,
        in the same format as `spec`. Every column name must be present in the
        original dataframe.
    :param spec: A dict specification of rules for each feature to discretize.
        If provided, only the columns in this dictionary will be discretized.
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
    :param remove_cols: A list of column names to remove from the discretized 
        version of the dataframe. Not used if `spec` is provided.
    :param sparse: If true, the resulting object will be backed by a sparse matrix.
        (The method still temporarily materializes a dense matrix even if sparse 
        is set to True.)
            
    :return: A DiscretizedData instance representing the dataframe.
    """
    column_descriptions = {}
    if spec is not None:
        discrete_columns = np.zeros((len(df), len(spec)), dtype=np.uint8)
        for col_idx, (col, col_spec) in enumerate(spec.items()):
            try:
                discrete_columns[:,col_idx], column_descriptions[col_idx] = discretize_column(col, df[col], col_spec)
            except Exception as e:
                raise ValueError(f"Error discretizing column '{col}': {e}")
    else:
        # Auto discretization
        col_names = [c for c in df.columns if c not in (remove_cols or [])]
        discrete_columns = np.zeros((len(df), len(col_names)), dtype=np.uint8)
        for col_idx, col in enumerate(col_names):
            try:
                if col in custom_cols:
                    col_spec = custom_cols[col]
                else:
                    data_type = detect_data_type(df[col].values)
                    if data_type == 'binary':
                        col_spec = {"method": "bin", "bins": [0.5], "names": ["False", "True"], "nan_name": "N/A"}
                    elif data_type == 'categorical':
                        col_spec = {"method": "unique", "nan_name": "N/A"}
                    else:
                        col_spec = {"method": "bin", "bins": 5, "nan_name": "N/A"}
                
                discrete_columns[:,col_idx], column_descriptions[col_idx] = discretize_column(col, df[col], col_spec)
            except Exception as e:
                raise ValueError(f"Error discretizing column '{col}': {e}")
    return DiscretizedData(sps.csr_matrix(discrete_columns) if sparse else discrete_columns,
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