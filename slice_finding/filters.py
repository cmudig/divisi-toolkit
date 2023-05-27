class SliceFilterBase:
    """
    Base class for classes that implement the __call__ function taking a
    slice object and returning True if the slice can be included in results and
    explored further, and False otherwise.
    """
    
    def __call__(self, slice_obj):
        return True
    
class ExcludeIfAny(SliceFilterBase):
    """
    Excludes a slice if any of the given child filters returns false.
    """
    def __init__(self, children):
        super().__init__()
        self.children = children
        
    def __call__(self, slice_obj):
        return all(child(slice_obj) for child in self.children)
    
class ExcludeIfAll(SliceFilterBase):
    """
    Excludes a slice if all of the given child filters return false.
    """
    def __init__(self, children):
        super().__init__()
        self.children = children
        
    def __call__(self, slice_obj):
        return any(child(slice_obj) for child in self.children)

class ExcludeFeatureValue(SliceFilterBase):
    """
    Excludes a slice if one of its feature value pairs is equal to the one
    selected by this filter.
    """
    def __init__(self, feature, value):
        super().__init__()
        self.feature = feature
        self.value = value
        
    def __call__(self, slice_obj):
        for feature in slice_obj.univariate_features():
            if feature.feature_name == self.feature and self.value in feature.allowed_values:
                return False
        return True

class ExcludeFeatureValueSet(SliceFilterBase):
    """
    Excludes a slice if one of its feature value pairs has a feature contained in the
    given feature set, and its value is contained in the given value set.
    """
    def __init__(self, features, values):
        super().__init__()
        self.features = features
        self.values = set(values)
        
    def __call__(self, slice_obj):
        for feature in slice_obj.univariate_features():
            if feature.feature_name in self.features and set(feature.allowed_values) & set(self.values):
                print("Excluding", slice_obj)
                return False
        return True
        
class IncludeOnlyFeatureValue(SliceFilterBase):
    """
    Excludes a slice if it does not contain the given feature value.
    """
    def __init__(self, feature, value):
        super().__init__()
        self.feature = feature
        self.value = value
        
    def __call__(self, slice_obj):
        for feature in slice_obj.univariate_features():
            if feature.feature_name == self.feature and self.value in feature.allowed_values:
                return True
        return False
        
class IncludeOnlyFeatureValueSet(SliceFilterBase):
    """
    Excludes a slice if it does not contain the given feature value.
    """
    def __init__(self, features, values):
        super().__init__()
        self.features = features
        self.values = set(values)
        
    def __call__(self, slice_obj):
        for feature in slice_obj.univariate_features():
            if feature.feature_name in self.features and set(feature.allowed_values) & set(self.values):
                return True
        return False
