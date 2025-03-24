class RuleFilterBase:
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
    
    def __repr__(self): return "<RuleFilterBase>"
    
    @classmethod
    def from_dict(cls, df, rule_filter):
        """Turns the given rule filter dictionary into a Divisi filter."""
        def make_rule_object(json_obj):
            assert "type" in json_obj, "Rule filter object must have 'type' field"
            if json_obj["type"].lower() == "combination":
                assert "combination" in json_obj, "Combination rule filter must have 'combination' field"
                if json_obj['combination'].lower() == 'and':
                    return ExcludeIfAll([make_rule_object(json_obj["lhs"]),
                                         make_rule_object(json_obj["rhs"])])
                elif json_obj['combination'].lower() == 'or':
                    return ExcludeIfAny([make_rule_object(json_obj["lhs"]),
                                         make_rule_object(json_obj["rhs"])])
                raise ValueError(f"Unexpected value for 'combination': '{json_obj['combination']}'")
            elif json_obj["type"].lower() == "constraint":
                assert "logic" in json_obj, "Rule filter object must have 'logic' field"
                features = json_obj.get("features", [])
                if not features: return RuleFilterBase()
                values = json_obj.get("values", [])
                if not values: 
                    if hasattr(df, "inverse_value_mapping"):
                        values = list(set(k for f in features
                                        for k in df.inverse_value_mapping.get(f, [None, {}])[1].keys()))
                    elif isinstance(df, pd.DataFrame):
                        values = list(set(k for f in features
                                        for k in np.unique(df[f])))
                    else:
                        values = list(set(k for f in features for k in np.unique(df[:,f])))
                if json_obj["logic"].lower() == "exclude":
                    return ExcludeFeatureValueSet(features, values)
                elif json_obj["logic"].lower() == "include":
                    return IncludeOnlyFeatureValueSet(features, values)
                raise ValueError(f"Unknown rule filter logic '{json_obj['logic']}'")
            elif json_obj["type"].lower() == "base":
                return RuleFilterBase()
            raise ValueError(f"Unknown rule filter type '{json_obj['type']}'")
        
        return make_rule_object(rule_filter)

    
class ExcludeIfAny(RuleFilterBase):
    """
    Excludes a slice if any of the given child filters returns false.
    """
    def __init__(self, lhs, rhs):
        super().__init__()
        self.lhs = lhs
        self.rhs = rhs
        
    def __call__(self, slice_obj):
        return self.lhs(slice_obj) and self.rhs(slice_obj)
    
    def replace(self, replacer):
        if (new_val := replacer(self)) is not None:
            return new_val
        return ExcludeIfAny(self.lhs.replace(replacer), self.rhs.replace(replacer))
    
    def to_dict(self):
        return {"type": "combination", "combination": "or", "lhs": self.lhs.to_dict(), "rhs": self.rhs.to_dict()}
    
    @classmethod
    def from_dict(cls, data):
        return cls(RuleFilterBase.from_dict(data["lhs"]),
                   RuleFilterBase.from_dict(data["rhs"]))
    
    def __repr__(self): return f"<Exclude If Any: {self.lhs}, {self.rhs}>"
    
class ExcludeIfAll(RuleFilterBase):
    """
    Excludes a slice if all of the given child filters return false.
    """
    def __init__(self, lhs, rhs):
        super().__init__()
        self.lhs = lhs
        self.rhs = rhs
        
    def __call__(self, slice_obj):
        return self.lhs(slice_obj) and self.rhs(slice_obj)
    
    def replace(self, replacer):
        if (new_val := replacer(self)) is not None:
            return new_val
        return ExcludeIfAll(self.lhs.replace(replacer), self.rhs.replace(replacer))
    
    def to_dict(self):
        return {"type": "combination", "combination": "and", "lhs": self.lhs.to_dict(), "rhs": self.rhs.to_dict()}
    
    @classmethod
    def from_dict(cls, data):
        return cls(RuleFilterBase.from_dict(data["lhs"]),
                   RuleFilterBase.from_dict(data["rhs"]))
    
    def __repr__(self): return f"<Exclude If All: {self.lhs}, {self.rhs}>"
 
class ExcludeFeatureValueSet(RuleFilterBase):
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
        return {"type": "constraint", "logic": "exclude", "features": list(self.features), "values": list(self.values)}
    
    @classmethod
    def from_dict(cls, data):
        return cls(data["features"], data["values"])
    
    def __repr__(self): return f"<Exclude: {', '.join(str(x) for x in self.features)} = {', '.join(str(x) for x in self.values)}>"

class IncludeOnlyFeatureValueSet(RuleFilterBase):
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
        return {"type": "constraint", "logic": "include", "features": list(self.features), "values": list(self.values)}
    
    @classmethod
    def from_dict(cls, data):
        return cls(data["features"], data["values"])
    
    def __repr__(self): return f"<Include: {', '.join(str(x) for x in self.features)} = {', '.join(str(x) for x in self.values)}>"
