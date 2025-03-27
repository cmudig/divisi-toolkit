import pathlib
import anywidget
import traitlets
import threading
import numpy as np
import scipy.sparse as sps
import pandas as pd
import time
import os
import json
import pickle
import traceback
from .subgroups import Rule, RuleFeatureBase
from .sampling import SamplingSubgroupSearch
from .filters import *
from .ranking import *
from .discretization import DiscretizedData, discretize_data
from .utils import detect_data_type, sha256sum
from .projections import Projection
from sklearn.neighbors import NearestNeighbors

def default_thread_starter(fn, args=[], kwargs={}):
    thread = threading.Thread(target=fn, args=args, kwargs=kwargs)
    thread.daemon = True
    thread.start()
    
def synchronous_thread_starter(fn, args=[], kwargs={}):
    fn(*args, **kwargs)
    
# from `npx vite`
DEV_ESM_URL = "http://localhost:5173/src/widget-main.js?anywidget"
DEV_CSS_URL = ""

# from `npx vite build`
BUNDLE_DIR = pathlib.Path(__file__).parent / "static"

DEFAULT_SAMPLER_PARAMETERS = {
    "num_samples": 50,
    "num_candidates": 100,
    "min_items_fraction": 0.01,
    "similarity_threshold": 0.9,
    "scoring_fraction": 1.0,
    "max_features": 3,
    "n_workers": None
}
    
class DivisiWidget(anywidget.AnyWidget):
    name = traitlets.Unicode().tag(sync=True)
    
    search_engine = traitlets.Instance(SamplingSubgroupSearch, allow_none=True)
    
    slice_color_map = traitlets.Dict({}).tag(sync=True)

    num_slices = traitlets.Int(10).tag(sync=True)
    sampler_parameters = traitlets.Dict(DEFAULT_SAMPLER_PARAMETERS).tag(sync=True)
    should_rerun = traitlets.Bool(False).tag(sync=True)
    should_cancel = traitlets.Bool(False).tag(sync=True)
    should_clear = traitlets.Bool(False).tag(sync=True)
    running_sampler = traitlets.Bool(False).tag(sync=True)
    num_samples_drawn = traitlets.Int(0).tag(sync=True)
    sampler_run_progress = traitlets.Float(0.0).tag(sync=True)
    ranking_functions = traitlets.Dict({})
    ranking_function_config = traitlets.Dict({}).tag(sync=True)
    ranking_weights = traitlets.Dict({}).tag(sync=True)
    metrics = traitlets.Dict({})
    metric_info = traitlets.Dict({}).tag(sync=True)
    derived_metrics = traitlets.Dict({})
    derived_metric_config = traitlets.Dict({}).tag(sync=True)
    hidden_metrics = traitlets.List(None).tag(sync=True)
    
    positive_only = traitlets.Bool(False).tag(sync=True)
    
    source_mask_expr = traitlets.Unicode("").tag(sync=True)
    min_items_fraction = traitlets.Float(0.01).tag(sync=True)
    max_features = traitlets.Int(3).tag(sync=True)
    
    metric_expression_request = traitlets.Dict(None).tag(sync=True)
    # Keys: error (string), success (boolean)
    metric_expression_response = traitlets.Dict(None).tag(sync=True)
    
    slices = traitlets.List([]).tag(sync=True)
    custom_slices = traitlets.List([]).tag(sync=True)
    custom_slice_results = traitlets.Dict({}).tag(sync=True)
    base_slice = traitlets.Dict({}).tag(sync=True)
    
    value_names = traitlets.Dict({}).tag(sync=True)
    
    slice_score_requests = traitlets.Dict({}).tag(sync=True)
    slice_score_results = traitlets.Dict({}).tag(sync=True)
    
    saved_slices = traitlets.List([]).tag(sync=True)
    hovered_slice = traitlets.Dict({}).tag(sync=True)
    selected_slices = traitlets.List([]).tag(sync=True)
    slice_intersection_labels = traitlets.List([]).tag(sync=True)
    slice_intersection_counts = traitlets.List([]).tag(sync=True)
    
    loading_projection = traitlets.Bool(False).tag(sync=True)
    should_compute_projection = traitlets.Bool(False).tag(sync=True)
    should_clear_projection = traitlets.Bool(False).tag(sync=True)
    projection_method = traitlets.Unicode("tsne").tag(sync=True)
    projection = traitlets.Instance(Projection, allow_none=True)
    
    grouped_map_layout = traitlets.Dict({}, allow_none=True).tag(sync=True)
    overlap_plot_metric = traitlets.Unicode("", allow_none=True).tag(sync=True)
    overlap_metric_legend = traitlets.Dict({}).tag(sync=True)
    hover_map_indexes = traitlets.Dict({}).tag(sync=True)
    selected_intersection_index = traitlets.Int(-1).tag(sync=True)
    
    thread_starter = traitlets.Any(default_thread_starter)
    
    search_scope_for_results = traitlets.Dict({}).tag(sync=True) # the search scope that is actually used in the results
    search_scope_info = traitlets.Dict({}).tag(sync=True)
    search_scope_enriched_features = traitlets.List([]).tag(sync=True)
    
    rule_filter_config = traitlets.Dict(None, allow_none=True).tag(sync=True)
    rule_filter = traitlets.Instance(RuleFilterBase, None, allow_none=True)
    
    state_path = traitlets.Unicode(None, allow_none=True)
    
    def __init__(self, discrete_data, *args, **kwargs):
        try:
            self._esm = DEV_ESM_URL if kwargs.get('dev', False) else (BUNDLE_DIR / "widget-main.js").read_text()
            self._css = DEV_CSS_URL if kwargs.get('dev', False) else (BUNDLE_DIR / "style.css").read_text()
        except FileNotFoundError:
            raise ValueError("No built widget source found, and dev is set to False. To resolve, run npx vite build from the client directory.")

        self.search_engine = None
        self._slice_description_cache = {}
        self._score_cache = {}
                
        # Convert data to DiscretizedData if needed
        if not isinstance(discrete_data, DiscretizedData):
            if isinstance(discrete_data, pd.DataFrame):
                discrete_data = discretize_data(discrete_data, 
                                                {c: { 'method': 'unique' } for c in discrete_data.columns})
            else:
                discrete_data = discretize_data(pd.DataFrame(discrete_data), 
                                                {i: { 'method': 'keep' } for i in np.arange(discrete_data.shape[1])})
        self.discrete_data = discrete_data
        self.projection = None
        
        self.metric_info = self.autogenerate_metric_info(kwargs.get("metrics", {}))        
        self.metrics = kwargs.get("metrics", {})
        
        self.state_path = kwargs.get("state_path", None)
        self._read_state()

        # Generate metric information for display in the interface
        self.derived_metrics = {**self.metrics}
        if hasattr(self, "derived_metric_config"):
            self.derived_metric_config = {**self.derived_metric_config, 
                                          **{k: { "expression": f"{{{k}}}" } for k in self.metrics}}
            self.update_derived_metrics()
        else:
            self.derived_metric_config = {k: { "expression": f"{{{k}}}" } for k in self.metrics}
            
        # Generate ranking functions and config objects
        if kwargs.get("ranking_functions", {}) or not hasattr(self, "ranking_function_config") or not self.ranking_function_config:
            ranking_fn_configs = {}
            ranking_weights = kwargs.get("ranking_weights", {})
            provided_score_weights = len(ranking_weights) > 0
            for name, fn in kwargs.get("ranking_functions", {}).items():
                if isinstance(fn, RankingFunctionBase):
                    ranking_fn_configs[name] = {"type": type(fn).__name__, "editable": False}
                else:
                    ranking_fn_configs[name] = fn
                if not provided_score_weights:
                    ranking_weights[name] = 1.0
            if not ranking_fn_configs:
                self.ranking_function_config, self.ranking_weights = self.autogenerate_ranking_functions(self.metric_info)
            else:
                self.ranking_function_config = ranking_fn_configs
                self.ranking_weights = ranking_weights
                
        if self.search_engine is None:
            self.search_engine = SamplingSubgroupSearch(
                self.discrete_data,
                self.ranking_functions,
                source_mask=parse_metric_expression(self.source_mask_expr, self.derived_metrics) if self.source_mask_expr else None,
                rule_filter=kwargs.get("rule_filter", None),
                holdout_fraction=kwargs.get("holdout_fraction", 0.5),
                **{k: v for k, v in kwargs.get("sampler_parameters", DEFAULT_SAMPLER_PARAMETERS).items() if k != 'num_samples'}
            )
            self.rule_filter = self.search_engine.rule_filter
            self.search_engine.results.score_cache = self._score_cache
        else:
            if "rule_filter" in kwargs:
                self.rule_filter = kwargs["rule_filter"]
        
        if not hasattr(self, "projection") or self.projection is None:
            if "projection" in kwargs:
                proj = kwargs["projection"]
                if isinstance(proj, Projection):
                    self.projection = proj
                elif isinstance(proj, np.ndarray):
                    if len(proj) == len(self.discrete_data): 
                        proj = proj[~self.search_engine.discovery_mask]
                    assert len(proj) == len(self.search_engine.eval_data), "Projection must have the same number of rows as the evaluation data"
                    assert proj.shape[1] == 2, "Projection must have x and y columns"
                    proj = (proj - proj.min(axis=0)) / (proj.max(axis=0) - proj.min(axis=0))
                    self.projection = Projection(proj.astype(np.float32))
            
        self.discovery_neighbors = NearestNeighbors(metric="cosine").fit(self.search_engine.discovery_data.one_hot_matrix)
        
        # this is in the combined discovery and eval sets
        self.search_scope_mask = None
        self.map_clusters = None
        
        super().__init__(*args, **kwargs)
        self.positive_only = self.search_engine.positive_only
        if isinstance(self.search_engine.inputs.value_names, dict):
            self.value_names = self.search_engine.inputs.value_names
        else:
            self.value_names = {i: v for i, v in enumerate(self.search_engine.inputs.value_names)}

        self.original_search_engine = self.search_engine
        # for cluster enriched features
        self.idf = 1 / (1e-3 + self.search_engine.eval_data.one_hot_matrix.mean(axis=0))
        self.update_grouped_map_layout()
        self.rerank_results()
        self._write_state()
        
    def _read_state(self):
        """
        Load widget state from the state_path if it exists.
        """
        try:
            if self.state_path is None or not os.path.exists(self.state_path):
                return
            if not os.path.isdir(self.state_path):
                raise ValueError("State path should be a directory")
            
            data_hash = self.discrete_data.get_hash()
            
            # First read search engine state
            if not os.path.exists(os.path.join(self.state_path, "search_state.pkl")):
                return
            
            # Search state is valid as long as the input data matches by hash
            with open(os.path.join(self.state_path, "search_state.pkl"), "rb") as file:
                sf_state = pickle.load(file)
            if sf_state.get("data_hash", None) != data_hash:
                print("Data hashes don't match, not loading state")
                return
            
            self.search_engine = SamplingSubgroupSearch.from_state_dict(self.discrete_data, self.ranking_functions, sf_state["search_state"])
            self.search_engine.results.score_cache = self._score_cache
            self.rule_filter = self.search_engine.rule_filter
            
            # Projection data is valid as long as the data hash matches and the discovery mask is the same
            if os.path.exists(os.path.join(self.state_path, "projection.pkl")):
                with open(os.path.join(self.state_path, "projection.pkl"), "rb") as file:
                    projection_data = pickle.load(file)
                    if projection_data["data_hash"] == data_hash and (projection_data["discovery_mask"] == self.search_engine.discovery_mask).all():
                        self.projection = Projection.from_dict(projection_data["projection"])
                    else:
                        print("Search engine hashes don't match, not loading projection")

            if os.path.exists(os.path.join(self.state_path, "interface_state.json")):
                with open(os.path.join(self.state_path, "interface_state.json"), "r") as file:
                    state = json.load(file)
                if "derived_metric_config" in state: self.derived_metric_config = state["derived_metric_config"]
                if "hidden_metrics" in state: self.hidden_metrics = state["hidden_metrics"]
                if "ranking_function_config" in state: self.ranking_function_config = state["ranking_function_config"]
                if "ranking_weights" in state: self.ranking_weights = state["ranking_weights"]
                if "saved_slices" in state: self.saved_slices = state["saved_slices"]
                if "selected_slices" in state: self.selected_slices = state["selected_slices"]            
                if "custom_slices" in state: self.custom_slices = state["custom_slices"]
                if "overlap_plot_metric" in state: self.overlap_plot_metric = state["overlap_plot_metric"]
                if "projection_method" in state: self.projection_method = state["projection_method"]

            self.original_search_engine = self.search_engine
            if self.search_scope_info: self.update_search_scopes()
        except Exception as e:
            print("Error loading state; resetting")
            traceback.print_exc()
            self.derived_metric_config = {}
            self.hidden_metrics = []
            self.ranking_function_config = {}
            self.ranking_weights = {}
            self.saved_slices = []
            self.selected_slices = []
            self.custom_slices = []
            self.overlap_plot_metric = ''
            self.projection_method = 'tsne'
            
    @traitlets.observe("derived_metric_config", "hidden_metrics", "ranking_function_config", "slices", "saved_slices", "selected_slices", "custom_slices", "overlap_plot_metric", "rule_filter")
    def _write_state(self, change=None):
        if not hasattr(self, "original_search_engine") or self.original_search_engine is None: return
        
        if not hasattr(self, "state_path") or self.state_path is None:
            return
        if not os.path.exists(self.state_path):
            os.mkdir(self.state_path)
        if not os.path.isdir(self.state_path):
            raise ValueError("State path should be a directory")

        with open(os.path.join(self.state_path, "search_state.pkl"), "wb") as file:
            pickle.dump({
                "data_hash": self.discrete_data.get_hash(),
                "search_state": self.original_search_engine.state_dict()
            }, file)

        self._save_projection()
                
        with open(os.path.join(self.state_path, "interface_state.json"), "w") as file:
            json.dump({
                "derived_metric_config": self.derived_metric_config,
                "ranking_function_config": self.ranking_function_config,
                "hidden_metrics": self.hidden_metrics,
                "ranking_weights": self.ranking_weights,
                "search_scope_info": self.search_scope_info,
                "saved_slices": self.saved_slices,
                "selected_slices": self.selected_slices,   
                "overlap_plot_metric": self.overlap_plot_metric,
                "custom_slices": self.custom_slices,
                "projection_method": self.projection_method
            }, file)

    def _save_projection(self):
        if self.projection is not None and (not hasattr(self, "_projection_save_hash") or not os.path.exists(os.path.join(self.state_path, "projection.pkl"))):
            self._projection_save_hash = self.discrete_data.get_hash()
            with open(os.path.join(self.state_path, "projection.pkl"), "wb") as file:
                pickle.dump({
                    "data_hash": self._projection_save_hash,
                    "discovery_mask": self.search_engine.discovery_mask,
                    "projection": self.projection.to_dict()
                }, file)
        elif self.projection is None and os.path.exists(os.path.join(self.state_path, "projection.pkl")):
            # delete the file
            os.remove(os.path.join(self.state_path, "projection.pkl"))
         
    def autogenerate_metric_info(self, metrics):
        metric_info = {}
        for name, data in (metrics or {}).items():
            if isinstance(data, dict):
                # User-specified options
                options = data
                data = options["data"]
            else:
                options = {}
            dtype = options.get("type", detect_data_type(data))
            metric_info[name] = {
                "type": dtype,
                **{k: v for k, v in options.items() if k != "data"}
            }
            if dtype == "categorical":
                metric_info[name]["values"] = [str(v) for v in np.unique(data)]
        return metric_info

    def autogenerate_ranking_functions(self, metric_info):
        ranking_fn_configs = {}
        ranking_weights = {}
        
        ranking_fn_configs["Subgroup Size"] = {"type": "SubgroupSize", "ideal_fraction": 0.1, "spread": 0.05}
        ranking_weights["Subgroup Size"] = 0.5
        ranking_fn_configs["Simple Rule"] = {"type": "SimpleRule"}
        ranking_weights["Simple Rule"] = 0.5
        
        if len(metric_info):
            first_metric = sorted(metric_info.keys())[0]
            info = metric_info[first_metric]
            if info["type"] == "binary":
                ranking_fn_configs[f"{first_metric} High"] = {"type": "OutcomeRate", "metric": f"{{{first_metric}}}", "inverse": False}
                ranking_fn_configs[f"{first_metric} Low"] = {"type": "OutcomeRate", "metric": f"{{{first_metric}}}", "inverse": True}
                ranking_weights[f"{first_metric} High"] = 1.0
                ranking_weights[f"{first_metric} Low"] = 0.0
            elif info["type"] == "continuous":
                ranking_fn_configs[f"{first_metric} Different"] = {"type": "MeanDifference", "metric": f"{{{first_metric}}}"}
                ranking_weights[f"{first_metric} Different"] = 1.0
        
        return ranking_fn_configs, ranking_weights
    
    def get_slice_description(self, slice_obj):
        """
        Retrieves a description of the given slice (either from a cache or from
        the slice finder results).
        """
        if not self.search_engine or not self.search_engine.results: return {}
        if slice_obj not in self._slice_description_cache:
            slice_obj = slice_obj.rescore(self.search_engine.results.score_slice(slice_obj))
            self._slice_description_cache[slice_obj] = self.search_engine.results.generate_slice_description(slice_obj, metrics=self.derived_metrics)
        return self._slice_description_cache[slice_obj]
        
    @traitlets.observe("derived_metrics")
    def metrics_changed(self, change=None):
        for m_name, m in self.derived_metrics.items():
            data = m["data"] if isinstance(m, dict) else m
            assert isinstance(data, np.ndarray) and len(data.shape) == 1, f"Metric data '{m_name}' must be 1D ndarray"
        if not self.search_engine or not self.search_engine.results: return
        self._slice_description_cache = {}
        self.slices = []
        self.rerank_results()
        self.update_grouped_map_layout()
        self.slice_score_request()
            
    @traitlets.observe("search_engine")
    def _sync_parameters_with_sampler(self, change=None):
        search_engine = change.new if change is not None else self.search_engine
        if search_engine is None: return
        
        self._setting_search_engine = True
        new_params = {**self.sampler_parameters} if hasattr(self, "sampler_parameters") else {**DEFAULT_SAMPLER_PARAMETERS}
        for k in DEFAULT_SAMPLER_PARAMETERS.keys():
            if hasattr(search_engine, k):
                new_params[k] = getattr(search_engine, k)
        self.sampler_parameters = new_params
        delattr(self, "_setting_search_engine")
        
    @traitlets.observe("sampler_parameters")
    def update_sampler_parameters(self, change=None):
        if hasattr(self, "_setting_search_engine"): return
        
        new_params = change.new if change is not None else self.sampler_parameters
        for k, v in new_params.items():
            if k not in DEFAULT_SAMPLER_PARAMETERS: continue
            if k != "num_samples":
                setattr(self.search_engine, k, v)
                setattr(self.original_search_engine, k, v)
                
        self._write_state()
        
    @traitlets.observe("should_rerun")
    def rerun_flag_changed(self, change):
        if change.new:
            if self.search_scope_for_results != self.search_scope_info:
                self.update_search_scopes()
                if self.search_scope_info.get('within_slice') or self.search_scope_info.get('within_selection'):
                    self.rerun_sampler()
                self.should_rerun = False
            else:
                self.rerun_sampler()
                
    @traitlets.observe("should_clear")
    def clear_flag_changed(self, change):
        if change.new:
            self.search_engine.clear_results()
            self.should_clear = False
            self._write_state()
            
    def rerun_sampler(self):
        self.thread_starter(self._rerun_sampler_background)

    def _rerun_sampler_background(self):
        """Function that runs in the background to recompute suggested selections."""
        self.should_rerun = False
        if self.running_sampler: 
            return
        self.running_sampler = True
        self.sampler_run_progress = 0.0
        self.num_slices = 10
        self.search_scope_for_results = {**self.search_scope_info}
        num_samples = self.sampler_parameters.get("num_samples", 50)
        
        try:
            sample_step = max(num_samples // 5, 50)
            i = 0
            base_progress = 0
            while i < num_samples:
                def update_sampler_progress(progress, total):
                    self.sampler_run_progress = base_progress + progress / num_samples
                    return self.should_cancel
                self.search_engine.progress_fn = update_sampler_progress
                
                results, sampled_idxs = self.search_engine.sample(min(sample_step, num_samples - i))
                results.score_cache = self._score_cache
                self.num_samples_drawn += len(sampled_idxs)
                self.rerank_results()
                base_progress += len(sampled_idxs) / num_samples
                i += sample_step
                if self.should_cancel:
                    break
            self.running_sampler = False
            
            time.sleep(0.01)
            self.should_cancel = False
            self.sampler_run_progress = 0.0
        except Exception as e:
            print(e)
            self.running_sampler = False
            raise e

    @traitlets.observe("ranking_weights", "num_slices")
    def rerank_results(self, change=None):
        if not self.search_engine or not self.search_engine.results: 
            self.update_slices([])
        else:    
            weights_to_use = {n: w for n, w in self.ranking_weights.items() if n in self.search_engine.ranking_fns}
            # # add weights for interaction effect scores
            # for n, config in self.ranking_function_config.items():
            #     if n in weights_to_use and n in self.ranking_functions and config["type"] == "OutcomeRate":
            #         weights_to_use[f"{n}_interaction"] = weights_to_use[n]
            ranked_results = self.search_engine.results.rank(weights_to_use, 
                                                            n_slices=self.num_slices,
                                                            decode=False)
            self.update_slices(ranked_results)
        
    def update_slices(self, ranked_results):
        self.update_custom_slices()
        self.base_slice = self.get_slice_description(Rule(RuleFeatureBase()))
        self.slices = [
            self.get_slice_description(slice_obj)
            for slice_obj in ranked_results
        ]
        
    @traitlets.observe("custom_slices")
    def update_custom_slices(self, change=None):
        if not self.search_engine or not self.search_engine.results: return
        encoded_slices = [self.search_engine.results.encode_rule(s['feature']) 
                          for s in self.custom_slices]
        self.custom_slice_results = {s['stringRep']: {**self.get_slice_description(enc), "stringRep": s['stringRep']}
                                     for s, enc in zip(self.custom_slices, encoded_slices)}

    @traitlets.observe("slice_score_requests")
    def slice_score_request(self, change=None):
        if not self.search_engine or not self.search_engine.results: return
        self.slice_score_results = {k: self.get_slice_description(self.search_engine.results.encode_rule(f)) 
                                    for k, f in self.slice_score_requests.items()}
        
    def _base_score_weights_for_spec(self, search_specs, spec, slice_finder):
        if not all(n in slice_finder.ranking_fns for n in spec["ranking_weights"]):
            return search_specs[0]["ranking_weights"]
        else:
            return spec["ranking_weights"]
        
    @traitlets.observe("search_scope_info", "hovered_slice")
    def update_top_feature(self, change=None):
        mask = None
        if self.hovered_slice or 'within_slice' in self.search_scope_info:
            hover_slice = self.search_engine.results.encode_rule(self.search_scope_info.get('within_slice', self.hovered_slice.get('feature')))
            mask = hover_slice.make_mask(self.search_engine.results.eval_df,
                                         univariate_masks=self.search_engine.results.univariate_masks,
                                         device=self.search_engine.results.device)
        elif 'within_selection' in self.search_scope_info and len(self.search_scope_info['within_selection']):
            if self.map_clusters is None:
                print("Can't get top feature for selection without map_clusters")
                self.search_scope_enriched_features = []
                return
            
            ids = self.search_scope_info["within_selection"]
            mask = self.map_clusters.isin(ids)
        
        if mask is not None:
            one_hot = self.search_engine.eval_data.one_hot_matrix
            feature_means = np.array(one_hot[mask].mean(axis=0))
            top_feature = np.argmax(feature_means * self.idf)
            self.search_scope_enriched_features = [self.search_engine.eval_data.one_hot_labels[top_feature]]
        else:
            self.search_scope_enriched_features = []
        
    @traitlets.observe("search_scope_info")
    def on_search_scope_change(self, change=None):
        self.search_scope_mask = None
        
    def update_search_scopes(self):
        if not self.search_engine: return
        
        search_info = self.search_scope_info
        
        if not search_info:
            self.search_engine = self.original_search_engine
            self.ranking_weights = {s: w for s, w in self.ranking_weights.items() if not s.startswith("Search Scope")}
            self.search_scope_mask = None
            self.search_scope_for_results = {}
            self._slice_description_cache = {}
            self.search_scope_enriched_features = []
            self.rerank_results()
            return
        
        base_finder = self.original_search_engine
        new_score_fns = {}
        initial_slice = base_finder.initial_slice
        new_source_mask = (base_finder.source_mask.copy() 
                           if base_finder.source_mask is not None 
                           else np.ones_like(base_finder.discovery_mask))
        exclusion_criteria = None
        
        if "within_slice" in search_info and not search_info.get("partial", False):
            contained_in_slice = base_finder.results.encode_rule(search_info["within_slice"])
            if contained_in_slice.feature != RuleFeatureBase():
                raw_inputs = base_finder.inputs.df if hasattr(base_finder.inputs, 'df') else base_finder.inputs
                ref_mask = contained_in_slice.make_mask(raw_inputs).cpu().numpy()
                new_score_fns["Search Scope Pos"] = OutcomeRate(ref_mask)
                new_score_fns["Search Scope Neg"] = OutcomeRate(~ref_mask, inverse=True)
                new_source_mask &= ref_mask
                self.search_scope_mask = ref_mask
            self.update_grouped_map_layout()
        elif "within_selection" in search_info and not search_info.get("partial", False):
            if self.map_clusters is None:
                print("Can't perform a selection-based search without map_clusters")
                return
            ids = search_info["within_selection"] # in grouped layout
            if not ids: return
            mask = self.map_clusters.isin(ids)
            if mask.sum() > 0:
                # convert this to the full dataset by finding the nearest
                # neighbors in the discovery set to the points in the evaluation set
                selection_vectors = self.search_engine.eval_data.one_hot_matrix[mask]
                nearest_discovery_points = self.discovery_neighbors.kneighbors(selection_vectors, 
                                                                               n_neighbors=int(np.ceil((1 - self.search_engine.holdout_fraction) / self.search_engine.holdout_fraction)) * 5,
                                                                               return_distance=False).flatten()
                uniques, counts = np.unique(nearest_discovery_points, return_counts=True)
                # these indexes are in the discovery mask space
                topk = uniques[np.flip(np.argsort(counts))[:int(mask.sum() * (1 - self.search_engine.holdout_fraction) / self.search_engine.holdout_fraction)]]
                disc_mask = np.zeros(base_finder.discovery_mask.sum(), dtype=np.uint8)
                disc_mask[topk] = 1
                print(f"Found {len(topk)} nearest neighbors for a selection with {mask.sum()} points in eval set")
                
                all_mask = np.zeros_like(base_finder.discovery_mask)
                all_mask[base_finder.discovery_mask] = disc_mask
                all_mask[self.search_engine.results.eval_indexes] = mask
                self.search_scope_mask = all_mask
                
                new_score_fns["Search Scope Pos"] = OutcomeRate(self.search_scope_mask)
                new_score_fns["Search Scope Neg"] = OutcomeRate(~self.search_scope_mask, inverse=True)
                new_source_mask &= self.search_scope_mask
            else:
                print("No clusters in ID set:", ids, self.map_clusters, np.unique(self.map_clusters))
                return
        else:
            return

        new_filter = self.rule_filter
        if exclusion_criteria is not None:
            if new_filter is not None:
                new_filter = ExcludeIfAny(new_filter, exclusion_criteria)
            else:
                new_filter = exclusion_criteria
        # subslice any outcomes 
        # adjusted_score_fns = {n: fn.with_data(fn.data & self.search_scope_mask)
        #                       for n, fn in base_finder.ranking_fns.items()
        #                       if hasattr(fn, "with_data")}
        new_finder = base_finder.copy_spec(
            ranking_fns={**base_finder.ranking_fns, **new_score_fns},
            source_mask=new_source_mask,
            rule_filter=new_filter,
            initial_slice=initial_slice,
        )
        self.search_engine = new_finder
        self.rule_filter = new_filter
        self.ranking_weights = {**{n: w for n, w in self.ranking_weights.items() if n in base_finder.ranking_fns},
                              **{n: 1.0 for n in new_score_fns}}
        self._slice_description_cache = {}
        self.rerank_results()        

    @traitlets.observe("ranking_function_config")
    def update_ranking_functions(self, change=None):
        sf = {}
        for n, config in self.ranking_function_config.items():
            if config.get("editable", True):
                sf[n] = RankingFunctionBase.from_configuration(config, self.derived_metrics) 
            elif n in self.ranking_functions:
                sf[n] = self.ranking_functions[n]
            # if n in sf and config['type'] == 'OutcomeRate':
            #     sf[f"{n}_interaction"] = InteractionEffect((1 - sf[n].data) if sf[n].inverse else sf[n].data)
        self.ranking_functions = sf
        if self.search_engine is not None:
            self.search_engine.rescore(self.ranking_functions)
            self.rerank_results()

    @traitlets.observe("derived_metric_config")
    def update_derived_metrics(self, change=None):
        
        self.derived_metrics = {
            n: {
                **(self.metrics[n] if isinstance(self.metrics.get(n, None), dict) else {}),
                "data": parse_metric_expression(config["expression"], self.metrics),
            }
            for n, config in self.derived_metric_config.items()
        }
        
    @traitlets.observe("metric_expression_request")
    def test_metric_expression(self, change):
        request = change.new
        if not request:
            self.metric_expression_response = None
            return
        try:
            parse_metric_expression(request["expression"], {k: self.derived_metrics[k] for k in request.get("metrics", self.metrics)})
        except Exception as e:
            self.metric_expression_response = {"success": False, "error": str(e)}
        else:
            self.metric_expression_response = {"success": True}
        
    @traitlets.observe("overlap_plot_metric")
    def overlap_plot_metric_changed(self, change):
        self.update_grouped_map_layout(change=None, overlap_metric=change.new)
        
    @traitlets.observe("hovered_slice")
    def update_hovered_slice(self, change=None):
        # Show which clusters contain at least 50% of this slice in the map
        if not self.hovered_slice or not self.search_engine or not self.search_engine.results or self.map_clusters is None:
            self.hover_map_indexes = {}
        else:
            hover_slice = self.search_engine.results.encode_rule(self.hovered_slice['feature']) 
            mask = hover_slice.make_mask(self.search_engine.results.eval_df,
                                         univariate_masks=self.search_engine.results.univariate_masks,
                                         device=self.search_engine.results.device)
            cluster_rates = pd.Series(mask).groupby(self.map_clusters).mean()
            self.hover_map_indexes = {
                "slice": self.hovered_slice,
                "clusters": cluster_rates[cluster_rates >= 0.5].index.tolist()
            }
        
    @traitlets.observe("selected_slices", "projection")        
    def update_grouped_map_layout(self, change=None, overlap_metric=None):
        if self.search_engine is None or self.search_engine.results is None: return
        
        overlap_metric = overlap_metric if overlap_metric is not None else self.overlap_plot_metric
        
        slice_masks = {}
        
        # Calculate the sizes of all intersections of the given sets
        manager = self.search_engine.results
        for s in self.selected_slices:
            slice_obj = manager.encode_rule(s['feature'])
            slice_masks[slice_obj] = manager.slice_mask(slice_obj).cpu().numpy()
                    
        slice_order = list(slice_masks.keys())
        labels = [{**self.get_slice_description(s), "stringRep": self.selected_slices[i]["stringRep"]} 
                   for i, s in enumerate(slice_order)]
        
        intersect_counts = []
        base_mask = np.arange(manager.df.shape[0])[manager.eval_mask]
        
        def calculate_intersection_counts(prefix, current_mask=None):
            count = current_mask.sum() if current_mask is not None else manager.eval_df.shape[0]
            if count == 0: return
            if len(prefix) == len(slice_order):
                info = {"slices": prefix, 
                                         "count": count}
                for metric_name, data in self.derived_metrics.items():
                    if isinstance(data, dict):
                        # User-specified options
                        options = data
                        data = options["data"]
                    else:
                        options = {}
                    data_type = options.get("type", detect_data_type(data))
                    if data_type == "binary":
                        info[metric_name] = data[base_mask[current_mask]].sum()
                    elif data_type == "categorical":
                        allowed_values = np.unique(data)
                        info[metric_name] = [{"value": v, "count": (data[base_mask[current_mask]] == v).sum()}
                                             for v in allowed_values]
                    elif data_type == "continuous":
                        info[metric_name] = data[base_mask[current_mask]].mean()

                intersect_counts.append(info)
                return
            univ_mask = slice_masks[slice_order[len(prefix)]]
            calculate_intersection_counts(prefix + [1], current_mask & univ_mask)
            calculate_intersection_counts(prefix + [0], current_mask & ~univ_mask)
           
        calculate_intersection_counts([], np.ones(manager.eval_df.shape[0], dtype=bool))
        self.slice_intersection_counts = intersect_counts 
        self.slice_intersection_labels = labels

        if self.projection is not None and hasattr(self, "search_scope_mask"):
            if overlap_metric:
                if isinstance(self.derived_metrics[overlap_metric], dict):
                    options = self.derived_metrics[overlap_metric]
                    error_metric = options["data"]
                else:
                    error_metric = self.derived_metrics[overlap_metric]
                    options = {}
                data_type = options.get("type", detect_data_type(error_metric))
                error_metric = error_metric[~self.search_engine.discovery_mask]
                if data_type == "continuous":
                    non_identity_outcome = (error_metric - np.nanmin(error_metric)) / (np.nanmax(error_metric) - np.nanmin(error_metric))
                    identity_outcome = None
                    self.overlap_metric_legend = {
                        "type": "continuous",
                        "min": np.nanmin(error_metric),
                        "max": np.nanmax(error_metric)
                    }
                elif data_type == "categorical":
                    dummies = pd.get_dummies(pd.Series(error_metric), prefix="", prefix_sep="")
                    identity_outcome = dummies.values.T
                    non_identity_outcome = np.argmax(dummies.values, axis=1).astype(float) / (len(dummies.columns) - 1)
                    self.overlap_metric_legend = {
                        "type": "categorical",
                        "categories": [{"name": c, "value": i / (len(dummies.columns) - 1)}
                                       for i, c in enumerate(dummies.columns)]
                    }
                else:
                    identity_outcome = error_metric
                    non_identity_outcome = error_metric
                    self.overlap_metric_legend = {
                        "type": "categorical",
                        "categories": [{"name": "False", "value": 0},
                                       {"name": "True", "value": 1}]
                    }
            else:
                identity_outcome = None
                non_identity_outcome = None
                self.overlap_metric_legend = {}
            
            layout, cluster_labels = self.projection.generate_groups(
                {
                    "categorical_outcome": identity_outcome if identity_outcome is not None else np.zeros(len(self.search_engine.eval_data)),
                    **({"slices": np.vstack([slice_masks[o] for i, o in enumerate(slice_order)])}
                    if slice_order else {}),
                    **({"search_scope": self.search_scope_mask[self.search_engine.results.eval_indexes]}
                    if self.search_scope_mask is not None else {})
                }, 
                task_id=(overlap_metric, tuple(s.string_rep() for s in slice_order), None) if self.search_scope_mask is None else None,
                other_labels={"outcome": non_identity_outcome if non_identity_outcome is not None else np.zeros(len(self.search_engine.eval_data))})
            
            one_hot = self.search_engine.eval_data.one_hot_matrix
            cluster_sums = pd.DataFrame(one_hot).groupby(cluster_labels).agg('mean')
            top_features = np.argmax(cluster_sums.values * self.idf, axis=1)
            enriched_cluster_features = {cluster: [self.search_engine.eval_data.one_hot_labels[top_features[i]]]
                                         for i, cluster in enumerate(cluster_sums.index)}
            

            self.grouped_map_layout = {
                'overlap_plot_metric': overlap_metric,
                'labels': labels,
                'layout': {k: {'slices': [], **v} for k, v in layout.items()},
                'enriched_cluster_features': enriched_cluster_features,
                'overlap_metric_legend': self.overlap_metric_legend
            }
            self.map_clusters = cluster_labels

            if self.search_scope_mask is not None:
                # Rewrite the cluster indexes to match the new values based on the existing search scope mask
                self.search_scope_info = {
                    **self.search_scope_info, 
                    "within_selection": np.unique(self.map_clusters[self.search_scope_mask[self.search_engine.results.eval_indexes]]).tolist(),
                    "partial": True, # this means that the clusters have been rewritten due to layout, so don't update the search
                    "proportion": self.search_scope_mask[self.search_engine.results.eval_indexes].sum() / len(self.search_scope_mask[self.search_engine.results.eval_indexes])
                }
                print("Edited search scope info", self.search_scope_info)
                
             #Ungrouped version
            '''self.grouped_map_layout = {
                'overlap_plot_metric': overlap_metric,
                'labels': self.slice_intersection_labels,
                'layout': [{
                    'outcome': error_metric[i],
                    'slices': [int(slice_masks[s][i]) for s in slice_order],
                    'x': self.map_layout[i,0],
                    'y': self.map_layout[i,1],
                    'size': 1
                } for i in range(len(self.map_layout))]
            }'''
        else:
            self.grouped_map_layout = None
            self.map_clusters = None
            
        if self.hovered_slice:
            self.update_hovered_slice()
      
    @traitlets.observe("should_clear_projection")
    def clear_projection(self, change=None):
        if change is None or change.new:
            self.projection = None
            self._save_projection()
        self.should_clear_projection = False
            
    @traitlets.observe("should_compute_projection")
    def compute_projection(self, change=None):
        if change is None or change.new:
            self.thread_starter(self._compute_projection_background)
          
    def _compute_projection_background(self):
        self.should_compute_projection = False
        if self.loading_projection: return
        self.loading_projection = True

        try:
            self.projection = self.search_engine.eval_data.get_projection(method=self.projection_method)
            self._write_state()
        except:
            print("Error occurred while loading projection")
            traceback.print_exc()
        finally:
            self.loading_projection = False
        
    @traitlets.observe("projection_method")
    def _update_projection_method(self, change=None):
        if self.projection is None: self._write_state()
        
    @traitlets.observe("rule_filter")    
    def update_rule_filter_config(self, change=None):
        if hasattr(self, "_updating_rule_filter"): return
        self._updating_rule_filter = True
        
        new_filter = change.new if change is not None else self.rule_filter
        self.search_engine.rule_filter = new_filter
        self.rule_filter_config = new_filter.to_dict() if new_filter else None
        self.search_engine.results = self.search_engine.refilter_results()
        self.rerank_results()
        
        delattr(self, "_updating_rule_filter")
        
    @traitlets.observe("rule_filter_config") 
    def update_rule_filter(self, change=None):
        if hasattr(self, "_updating_rule_filter"): return
        self._updating_rule_filter = True
        
        new_filter_config = change.new if change is not None else self.rule_filter_config
        if new_filter_config is None:
            new_filter = None
        else:
            new_filter = RuleFilterBase.from_dict(self.discrete_data, new_filter_config)
        self.search_engine.rule_filter = new_filter
        self.rule_filter = new_filter
        self.search_engine.results = self.search_engine.refilter_results()
        self.rerank_results()
        
        delattr(self, "_updating_rule_filter")