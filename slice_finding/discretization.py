import pandas as pd
import numpy as np
import scipy.sparse as sps

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
            column_descriptions[col] = (col, {i: _represent_bin(bins, i, quantile="quantiles" in col_spec)
                                              for i in range(len(bins) + 1)})
        elif col_spec["method"] == "unique":
            unique_vals = sorted(df[col].unique().tolist())
            discrete_columns[col] = df[col].apply(lambda v: unique_vals.index(v))
            column_descriptions[col] = (col, {i: v for i, v in enumerate(unique_vals)})
    return DiscretizedData(pd.DataFrame(discrete_columns, index=df.index),
                           column_descriptions)
