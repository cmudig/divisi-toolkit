class SliceFilterBase:
    """
    Base class for classes that implement the __call__ function taking a
    slice object and returning True if the slice can be included in results and
    explored further, and False otherwise.
    """
    
    def __call__(self, slice_obj):
        return True
    
    def replace(self, replacer):
        """
        replacer: A function that takes a filter object and returns either a 
            new filter object or None. If it returns None, the filter object
            will be recursed through and the replacer called on any of its
            children; otherwise it will be kept as-is.
        """
        if (new_val := replacer(self)) is not None:
            return new_val
        return self
    
    def to_dict(self):
        return {"type": "base"}
    
    @classmethod
    def from_dict(cls, data):
        assert "type" in data, "Slice filter dict must contain a 'type' key"
        f_type = data["type"]
        if f_type == "base":
            return SliceFilterBase()
        elif f_type == "ExcludeIfAny":
            return ExcludeIfAny.from_dict(data)
        elif f_type == "ExcludeIfAll":
            return ExcludeIfAll.from_dict(data)
        elif f_type == "ExcludeFeatureValue":
            return ExcludeFeatureValue.from_dict(data)
        elif f_type == "ExcludeFeatureValueSet":
            return ExcludeFeatureValueSet.from_dict(data)
        elif f_type == "IncludeOnlyFeatureValue":
            return IncludeOnlyFeatureValue.from_dict(data)
        elif f_type == "IncludeOnlyFeatureValueSet":
            return IncludeOnlyFeatureValueSet.from_dict(data)
        raise ValueError(f"Unrecognized slice filter type '{f_type}'")
    
    def __str__(self): return "<SliceFilterBase>"
    
class ExcludeIfAny(SliceFilterBase):
    """
    Excludes a slice if any of the given child filters returns false.
    """
    def __init__(self, children):
        super().__init__()
        self.children = children
        
    def __call__(self, slice_obj):
        return all(child(slice_obj) for child in self.children)
    
    def replace(self, replacer):
        if (new_val := replacer(self)) is not None:
            return new_val
        return ExcludeIfAny([c.replace(replacer) for c in self.children])
    
    def to_dict(self):
        return {"type": type(self).__name__, "children": [c.to_dict() for c in self.children]}
    
    @classmethod
    def from_dict(cls, data):
        return cls([SliceFilterBase.from_dict(c) for c in data["children"]])
    
    def __str__(self): return f"<Exclude If Any: {', '.join(str(c) for c in self.children)}>"
    
class ExcludeIfAll(SliceFilterBase):
    """
    Excludes a slice if all of the given child filters return false.
    """
    def __init__(self, children):
        super().__init__()
        self.children = children
        
    def __call__(self, slice_obj):
        return any(child(slice_obj) for child in self.children)

    def replace(self, replacer):
        if (new_val := replacer(self)) is not None:
            return new_val
        return ExcludeIfAny([c.replace(replacer) for c in self.children])
       
    def to_dict(self):
        return {"type": type(self).__name__, "children": [c.to_dict() for c in self.children]}
    
    @classmethod
    def from_dict(cls, data):
        return cls([SliceFilterBase.from_dict(c) for c in data["children"]])
    
    def __str__(self): return f"<Exclude If All: {', '.join(str(c) for c in self.children)}>"
 
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

    def to_dict(self):
        return {"type": type(self).__name__, "feature": self.feature, "value": self.value}
    
    @classmethod
    def from_dict(cls, data):
        return cls(data["feature"], data["value"])
    
    def __str__(self): return f"<Exclude: {self.feature} = {self.value}>"

class ExcludeFeatureValueSet(SliceFilterBase):
    """
    Excludes a slice if one of its feature value pairs has a feature contained in the
    given feature set, and its value is contained in the given value set.
    """
    def __init__(self, features, values):
        super().__init__()
        self.features = set(features)
        self.values = set(values)
        
    def __call__(self, slice_obj):
        for feature in slice_obj.univariate_features():
            if feature.feature_name in self.features and set(feature.allowed_values) & set(self.values):
                return False
        return True
    
    def to_dict(self):
        return {"type": type(self).__name__, "features": list(self.features), "values": list(self.values)}
    
    @classmethod
    def from_dict(cls, data):
        return cls(data["features"], data["values"])
    
    def __str__(self): return f"<Exclude: {', '.join(str(x) for x in self.features)} = {', '.join(str(x) for x in self.values)}>"

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

    def to_dict(self):
        return {"type": type(self).__name__, "feature": self.feature, "value": self.value}
    
    @classmethod
    def from_dict(cls, data):
        return cls(data["feature"], data["value"])
    
    def __str__(self): return f"<Include: {self.feature} = {self.value}>"
            
class IncludeOnlyFeatureValueSet(SliceFilterBase):
    """
    Excludes a slice if it does not contain the given feature value.
    """
    def __init__(self, features, values):
        super().__init__()
        self.features = set(features)
        self.values = set(values)
        
    def __call__(self, slice_obj):
        for feature in slice_obj.univariate_features():
            if feature.feature_name in self.features and set(feature.allowed_values) & set(self.values):
                return True
        return False

    def to_dict(self):
        return {"type": type(self).__name__, "features": list(self.features), "values": list(self.values)}
    
    @classmethod
    def from_dict(cls, data):
        return cls(data["features"], data["values"])
    
    def __str__(self): return f"<Include: {', '.join(str(x) for x in self.features)} = {', '.join(str(x) for x in self.values)}>"
