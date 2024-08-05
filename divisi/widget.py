import pathlib
import anywidget
import traitlets
import threading
import numpy as np
import pandas as pd
import time
import os
import json
import pickle
from .slices import Slice, SliceFeatureBase
from .sampling import SamplingSliceFinder
from .filters import *
from .scores import *
from .discretization import DiscretizedData
from .utils import powerset, detect_data_type
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
    
class SliceFinderWidget(anywidget.AnyWidget):
    name = traitlets.Unicode().tag(sync=True)
    
    slice_color_map = traitlets.Dict({}).tag(sync=True)

    num_slices = traitlets.Int(10).tag(sync=True)
    num_samples = traitlets.Int(50).tag(sync=True)
    should_rerun = traitlets.Bool(False).tag(sync=True)
    should_cancel = traitlets.Bool(False).tag(sync=True)
    running_sampler = traitlets.Bool(False).tag(sync=True)
    num_samples_drawn = traitlets.Int(0).tag(sync=True)
    sampler_run_progress = traitlets.Float(0.0).tag(sync=True)
    score_functions = traitlets.Dict({})
    score_function_config = traitlets.Dict({}).tag(sync=True)
    score_weights = traitlets.Dict({}).tag(sync=True)
    metrics = traitlets.Dict({})
    metric_info = traitlets.Dict({}).tag(sync=True)
    derived_metrics = traitlets.Dict({})
    derived_metric_config = traitlets.Dict({}).tag(sync=True)
    
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
    grouped_map_layout = traitlets.Dict({}).tag(sync=True)
    overlap_plot_metric = traitlets.Unicode("").tag(sync=True)
    hover_map_indexes = traitlets.Dict({}).tag(sync=True)
    selected_intersection_index = traitlets.Int(-1).tag(sync=True)
    
    thread_starter = traitlets.Any(default_thread_starter)
    
    search_scope_info = traitlets.Dict({}).tag(sync=True)
    search_scope_enriched_features = traitlets.List([]).tag(sync=True)
    
    state_path = traitlets.Unicode(None, allow_none=True)
    
    # for the user study
    interface = traitlets.Unicode("B").tag(sync=True)
    
    def __init__(self, discrete_data, *args, **kwargs):
        try:
            self._esm = DEV_ESM_URL if kwargs.get('dev', False) else (BUNDLE_DIR / "widget-main.js").read_text()
            self._css = DEV_CSS_URL if kwargs.get('dev', False) else (BUNDLE_DIR / "style.css").read_text()
        except FileNotFoundError:
            raise ValueError("No built widget source found, and dev is set to False. To resolve, run npx vite build from the client directory.")
        
        self.slice_finder = None
        
        metric_info = {}
        for name, data in kwargs.get("metrics", {}).items():
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
        self.metric_info = metric_info
                
        # Generate score functions automatically if needed
        score_fn_configs = {}
        score_weights = kwargs.get("score_weights", {})
        provided_score_weights = len(score_weights) > 0
        for name, fn in kwargs.get("score_functions", {}).items():
            if isinstance(fn, ScoreFunctionBase):
                score_fn_configs[name] = {"type": type(fn).__name__, "editable": False}
            else:
                score_fn_configs[name] = fn
            if not provided_score_weights:
                score_weights[name] = 1.0
        if not score_fn_configs:
            score_fn_configs["Slice Size"] = {"type": "SliceSizeScore", "ideal_fraction": 0.1, "spread": 0.05}
            score_weights["Slice Size"] = 0.5
            score_fn_configs["Simple Rule"] = {"type": "NumFeaturesScore"}
            score_weights["Simple Rule"] = 0.5
            
            if len(self.metric_info):
                first_metric = sorted(self.metric_info.keys())[0]
                info = self.metric_info[first_metric]
                if info["type"] == "binary":
                    score_fn_configs[f"{first_metric} High"] = {"type": "OutcomeRateScore", "metric": f"{{{first_metric}}}", "inverse": False}
                    score_fn_configs[f"{first_metric} Low"] = {"type": "OutcomeRateScore", "metric": f"{{{first_metric}}}", "inverse": True}
                    score_weights[f"{first_metric} High"] = 1.0
                    score_weights[f"{first_metric} Low"] = 0.0
                elif info["type"] == "continuous":
                    score_fn_configs[f"{first_metric} Different"] = {"type": "MeanDifferenceScore", "metric": f"{{{first_metric}}}"}
                    score_weights[f"{first_metric} Different"] = 1.0
                
        self.discrete_data = discrete_data
        self.metrics = kwargs.get("metrics", {})
        self.derived_metrics = {**self.metrics}
        self.derived_metric_config = {k: { "expression": f"{{{k}}}" } for k in self.metrics}
        self.score_functions = kwargs.get("score_functions", {})
        self.score_function_config = score_fn_configs
        self._slice_description_cache = {}
        self.score_weights = score_weights
        self._score_cache = {}
        
        self.state_path = kwargs.get("state_path", None)
        self._read_state()
        
        if self.slice_finder is None:
            self.slice_finder = SamplingSliceFinder(
                self.discrete_data,
                self.score_functions,
                source_mask=parse_metric_expression(self.source_mask_expr, self.derived_metrics) if self.source_mask_expr else None,
                min_items=len(data) * 0.5 * self.min_items_fraction,
                holdout_fraction=0.5,
                max_features=self.max_features,
                positive_only=self.positive_only,
                similarity_threshold=0.9
            )
            self.slice_finder.results.score_cache = self._score_cache
        
        if not hasattr(self, "projection") or self.projection is None:
            if "projection" in kwargs:
                self.projection = kwargs["projection"]
            else:
                self.projection = self.slice_finder.eval_data.get_projection(method='tsne')
            
        self.discovery_neighbors = NearestNeighbors(metric="cosine").fit(self.slice_finder.discovery_data.one_hot_matrix)
        
        # this is in the combined discovery and eval sets
        self.search_scope_mask = None
        self.map_clusters = None
        
        super().__init__(*args, **kwargs)
        self.positive_only = self.slice_finder.positive_only
        if isinstance(self.slice_finder.inputs, DiscretizedData):
            if isinstance(self.slice_finder.inputs.value_names, dict):
                self.value_names = self.slice_finder.inputs.value_names
            else:
                self.value_names = {i: v for i, v in enumerate(self.slice_finder.inputs.value_names)}
        elif isinstance(self.slice_finder.inputs, pd.DataFrame):
            self.value_names = {col: sorted(self.slice_finder.inputs[col].unique())
                                for col in self.slice_finder.inputs.columns}
        else:
            self.value_names = {col: sorted(self.slice_finder.inputs[:,col].unique())
                                for col in range(self.slice_finder.inputs.shape[1])}
        
        self.original_slice_finder = self.slice_finder
        # for cluster enriched features
        self.idf = 1 / (1e-3 + self.slice_finder.eval_data.one_hot_matrix.mean(axis=0))
        self.update_selected_slices()
        self.rerank_results()
        self._write_state()
        
    def _read_state(self):
        """
        Load widget state from the state_path if it exists.
        """
        if self.state_path is None or not os.path.exists(self.state_path):
            return
        if not os.path.isdir(self.state_path):
            raise ValueError("State path should be a directory")
        if os.path.exists(os.path.join(self.state_path, "projection.pkl")):
            with open(os.path.join(self.state_path, "projection.pkl"), "rb") as file:
                self.projection = Projection.from_dict(pickle.load(file))
        if os.path.exists(os.path.join(self.state_path, "state.json")):
            with open(os.path.join(self.state_path, "state.json"), "r") as file:
                state = json.load(file)
            if "metric_info" in state: self.metric_info = state["metric_info"]
            if "derived_metric_config" in state: self.derived_metric_config = state["derived_metric_config"]
            if "score_function_config" in state: self.score_function_config = state["score_function_config"]
            if "saved_slices" in state: self.saved_slices = state["saved_slices"]
            if "selected_slices" in state: self.selected_slices = state["selected_slices"]            
            if "custom_slices" in state: self.custom_slices = state["custom_slices"]
            if "overlap_plot_metric" in state: self.overlap_plot_metric = state["overlap_plot_metric"]
        if os.path.exists(os.path.join(self.state_path, "slice_finder.pkl")):
            with open(os.path.join(self.state_path, "slice_finder.pkl"), "rb") as file:
                sf_state = pickle.load(file)
            self.slice_finder = SamplingSliceFinder.from_state_dict(self.discrete_data, self.score_functions, sf_state)
            self.slice_finder.results.score_cache = self._score_cache
            self.original_slice_finder = self.slice_finder
            if self.search_scope_info: self.update_search_scopes()
        
    @traitlets.observe("metric_info", "derived_metric_config", "score_function_config", "saved_slices", "selected_slices", "custom_slices", "overlap_plot_metric")
    def _write_state(self, change=None):
        if self.slice_finder is None: return
        
        if not hasattr(self, "state_path") or self.state_path is None:
            return
        if not os.path.exists(self.state_path):
            os.mkdir(self.state_path)
        if not os.path.isdir(self.state_path):
            raise ValueError("State path should be a directory")

        if not os.path.exists(os.path.join(self.state_path, "projection.pkl")):
            with open(os.path.join(self.state_path, "projection.pkl"), "wb") as file:
                pickle.dump(self.projection.to_dict(), file)
                
        with open(os.path.join(self.state_path, "state.json"), "w") as file:
            json.dump({
                "metric_info": self.metric_info,
                "derived_metric_config": self.derived_metric_config,
                "score_function_config": self.score_function_config,
                "search_scope_info": self.search_scope_info,
                "saved_slices": self.saved_slices,
                "selected_slices": self.selected_slices,   
                "overlap_plot_metric": self.overlap_plot_metric,
                "custom_slices": self.custom_slices
            }, file)

        if self.original_slice_finder is not None:
            with open(os.path.join(self.state_path, "slice_finder.pkl"), "wb") as file:
                pickle.dump(self.original_slice_finder.state_dict(), file)
            
    def get_slice_description(self, slice_obj):
        """
        Retrieves a description of the given slice (either from a cache or from
        the slice finder results).
        """
        if not self.slice_finder or not self.slice_finder.results: return {}
        if slice_obj not in self._slice_description_cache:
            slice_obj = slice_obj.rescore(self.slice_finder.results.score_slice(slice_obj))
            self._slice_description_cache[slice_obj] = self.slice_finder.results.generate_slice_description(slice_obj, metrics=self.derived_metrics)
        return self._slice_description_cache[slice_obj]
        
    @traitlets.observe("derived_metrics")
    def metrics_changed(self, change=None):
        for m_name, m in self.derived_metrics.items():
            data = m["data"] if isinstance(m, dict) else m
            assert isinstance(data, np.ndarray) and len(data.shape) == 1, f"Metric data '{m_name}' must be 1D ndarray"
        if not self.slice_finder or not self.slice_finder.results: return
        self._slice_description_cache = {}
        self.slices = []
        self.rerank_results()
        self.update_selected_slices()
        self.slice_score_request()
            
    @traitlets.observe("should_rerun")
    def rerun_flag_changed(self, change):
        if change.new:
            self.rerun_sampler()
            
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
        
        try:
            sample_step = max(self.num_samples // 5, 50)
            i = 0
            base_progress = 0
            while i < self.num_samples:
                def update_sampler_progress(progress, total):
                    self.sampler_run_progress = base_progress + progress / self.num_samples
                self.slice_finder.progress_fn = update_sampler_progress
                
                results, sampled_idxs = self.slice_finder.sample(min(sample_step, self.num_samples - i))
                results.score_cache = self._score_cache
                self.num_samples_drawn += len(sampled_idxs)
                self.rerank_results()
                base_progress += len(sampled_idxs) / self.num_samples
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

    @traitlets.observe("score_weights", "num_slices")
    def rerank_results(self, change=None):
        if not self.slice_finder or not self.slice_finder.results: 
            self.update_slices([])
        else:    
            weights_to_use = {n: w for n, w in self.score_weights.items() if n in self.slice_finder.score_fns}
            # add weights for interaction effect scores
            for n, config in self.score_function_config.items():
                if n in weights_to_use and n in self.score_functions and config["type"] == "OutcomeRateScore":
                    weights_to_use[f"{n}_interaction"] = weights_to_use[n]
            ranked_results = self.slice_finder.results.rank(weights_to_use, 
                                                            n_slices=self.num_slices)
            self.update_slices(ranked_results)
        
    def update_slices(self, ranked_results):
        self.update_custom_slices()
        self.base_slice = self.get_slice_description(Slice(SliceFeatureBase()))
        self.slices = [
            self.get_slice_description(slice_obj)
            for slice_obj in ranked_results
        ]
        
    @traitlets.observe("custom_slices")
    def update_custom_slices(self, change=None):
        if not self.slice_finder or not self.slice_finder.results: return
        encoded_slices = [self.slice_finder.results.encode_slice(s['feature']) 
                          for s in self.custom_slices]
        self.custom_slice_results = {s['stringRep']: {**self.get_slice_description(enc), "stringRep": s['stringRep']}
                                     for s, enc in zip(self.custom_slices, encoded_slices)}

    @traitlets.observe("slice_score_requests")
    def slice_score_request(self, change=None):
        if not self.slice_finder or not self.slice_finder.results: return
        self.slice_score_results = {k: self.get_slice_description(self.slice_finder.results.encode_slice(f)) 
                                    for k, f in self.slice_score_requests.items()}
        
    def _base_score_weights_for_spec(self, search_specs, spec, slice_finder):
        if not all(n in slice_finder.score_fns for n in spec["score_weights"]):
            return search_specs[0]["score_weights"]
        else:
            return spec["score_weights"]
        
    @traitlets.observe("search_scope_info")        
    def update_search_scopes(self, change=None):
        if not self.slice_finder: return
        
        search_info = self.search_scope_info
        
        if not search_info:
            self.slice_finder = self.original_slice_finder
            self.score_weights = {s: w for s, w in self.score_weights.items() if not s.startswith("Search Scope")}
            self.search_scope_mask = None
            self._slice_description_cache = {}
            self.search_scope_enriched_features = []
            self.rerank_results()
            return
        
        base_finder = self.original_slice_finder
        new_score_fns = {}
        initial_slice = base_finder.initial_slice
        new_source_mask = (base_finder.source_mask.copy() 
                           if base_finder.source_mask is not None 
                           else np.ones_like(base_finder.discovery_mask))
        exclusion_criteria = None
        
        if "within_slice" in search_info and not search_info.get("partial", False):
            contained_in_slice = base_finder.results.encode_slice(search_info["within_slice"])
            if contained_in_slice.feature != SliceFeatureBase():
                raw_inputs = base_finder.inputs.df if hasattr(base_finder.inputs, 'df') else base_finder.inputs
                ref_mask = contained_in_slice.make_mask(raw_inputs).cpu().numpy()
                new_score_fns["Search Scope Pos"] = OutcomeRateScore(ref_mask)
                new_score_fns["Search Scope Neg"] = OutcomeRateScore(~ref_mask, inverse=True)
                new_source_mask &= ref_mask
                self.search_scope_mask = ref_mask
            self.update_selected_slices()
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
                selection_vectors = self.slice_finder.eval_data.one_hot_matrix[mask]
                nearest_discovery_points = self.discovery_neighbors.kneighbors(selection_vectors, 
                                                                               n_neighbors=int(np.ceil((1 - self.slice_finder.holdout_fraction) / self.slice_finder.holdout_fraction)) * 5,
                                                                               return_distance=False).flatten()
                uniques, counts = np.unique(nearest_discovery_points, return_counts=True)
                # these indexes are in the discovery mask space
                topk = uniques[np.flip(np.argsort(counts))[:int(mask.sum() * (1 - self.slice_finder.holdout_fraction) / self.slice_finder.holdout_fraction)]]
                disc_mask = np.zeros(base_finder.discovery_mask.sum(), dtype=np.uint8)
                disc_mask[topk] = 1
                print(f"Found {len(topk)} nearest neighbors for a selection with {mask.sum()} points in eval set")
                
                all_mask = np.zeros_like(base_finder.discovery_mask)
                all_mask[base_finder.discovery_mask] = disc_mask
                all_mask[self.slice_finder.results.eval_indexes] = mask
                self.search_scope_mask = all_mask
                
                new_score_fns["Search Scope Pos"] = OutcomeRateScore(self.search_scope_mask)
                new_score_fns["Search Scope Neg"] = OutcomeRateScore(~self.search_scope_mask, inverse=True)
                new_source_mask &= self.search_scope_mask
            else:
                print("No clusters in ID set:", ids, self.map_clusters, np.unique(self.map_clusters))
                return
        else:
            return

        new_filter = base_finder.group_filter
        if exclusion_criteria is not None:
            if new_filter is not None:
                new_filter = ExcludeIfAny([new_filter, exclusion_criteria])
            else:
                new_filter = exclusion_criteria
        # subslice any outcomes 
        # adjusted_score_fns = {n: fn.with_data(fn.data & self.search_scope_mask)
        #                       for n, fn in base_finder.score_fns.items()
        #                       if hasattr(fn, "with_data")}
        new_finder = base_finder.copy_spec(
            score_fns={**base_finder.score_fns, **new_score_fns},
            source_mask=new_source_mask,
            group_filter=new_filter,
            initial_slice=initial_slice,
        )
        self.slice_finder = new_finder
        self.score_weights = {**{n: w for n, w in self.score_weights.items() if n in base_finder.score_fns},
                              **{n: 1.0 for n in new_score_fns}}
        self._slice_description_cache = {}
        self.rerank_results()
        
        one_hot = self.slice_finder.eval_data.one_hot_matrix
        feature_means = one_hot[self.search_scope_mask[self.slice_finder.results.eval_indexes]].mean(axis=0)
        top_feature = np.argmax(feature_means * self.idf)
        self.search_scope_enriched_features = [self.slice_finder.eval_data.one_hot_labels[top_feature]]

    @traitlets.observe("score_function_config")
    def update_score_functions(self, change=None):
        sf = {}
        for n, config in self.score_function_config.items():
            if config.get("editable", True):
                sf[n] = ScoreFunctionBase.from_configuration(config, self.derived_metrics) 
            elif n in self.score_functions:
                sf[n] = self.score_functions[n]
            if n in sf and config['type'] == 'OutcomeRateScore':
                sf[f"{n}_interaction"] = InteractionEffectScore((1 - sf[n].data) if sf[n].inverse else sf[n].data)
        self.score_functions = sf
        if self.slice_finder is not None:
            self.slice_finder.rescore(self.score_functions)
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
        self.update_selected_slices(change=None, overlap_metric=change.new)
        
    @traitlets.observe("hovered_slice")
    def update_hovered_slice(self, change=None):
        # Show which clusters contain at least 50% of this slice in the map
        if not self.hovered_slice or not self.slice_finder or not self.slice_finder.results or self.map_clusters is None:
            self.hover_map_indexes = {}
        else:
            hover_slice = self.slice_finder.results.encode_slice(self.hovered_slice['feature']) 
            mask = hover_slice.make_mask(self.slice_finder.results.eval_df,
                                         univariate_masks=self.slice_finder.results.univariate_masks,
                                         device=self.slice_finder.results.device)
            cluster_rates = pd.Series(mask).groupby(self.map_clusters).mean()
            self.hover_map_indexes = {
                "slice": self.hovered_slice,
                "clusters": cluster_rates[cluster_rates >= 0.5].index.tolist()
            }
        
    @traitlets.observe("selected_slices")
    def update_selected_slices(self, change=None, overlap_metric=None):
        if self.slice_finder is None or self.slice_finder.results is None: return
        
        overlap_metric = overlap_metric if overlap_metric is not None else self.overlap_plot_metric
        
        slice_masks = {}
        
        # Calculate the sizes of all intersections of the given sets
        manager = self.slice_finder.results
        for s in self.selected_slices:
            slice_obj = manager.encode_slice(s['feature'])
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

                intersect_counts.append(info)
                return
            univ_mask = slice_masks[slice_order[len(prefix)]]
            calculate_intersection_counts(prefix + [1], current_mask & univ_mask)
            calculate_intersection_counts(prefix + [0], current_mask & ~univ_mask)
           
        calculate_intersection_counts([], np.ones(manager.eval_df.shape[0], dtype=bool))
        self.slice_intersection_counts = intersect_counts 
        self.slice_intersection_labels = labels

        print("Calculated intersection counts", len(slice_masks))
        if self.projection is not None and overlap_metric:
            error_metric = self.derived_metrics[overlap_metric]
            if isinstance(error_metric, dict): error_metric = error_metric["data"]
            error_metric = error_metric[~self.slice_finder.discovery_mask]
            
            layout, cluster_labels = self.projection.generate_groups({
                "outcome": error_metric,
                **({"slices": np.vstack([slice_masks[o] for i, o in enumerate(slice_order)])}
                   if slice_order else {}),
                **({"search_scope": self.search_scope_mask[self.slice_finder.results.eval_indexes]}
                   if self.search_scope_mask is not None else {})
            }, task_id=(overlap_metric, tuple(s.string_rep() for s in slice_order), None) if self.search_scope_mask is None else None)
            
            one_hot = self.slice_finder.eval_data.one_hot_matrix
            cluster_sums = pd.DataFrame(one_hot).groupby(cluster_labels).agg('mean')
            top_features = np.argmax(cluster_sums.values * self.idf, axis=1)
            enriched_cluster_features = {cluster: [self.slice_finder.eval_data.one_hot_labels[top_features[i]]]
                                         for i, cluster in enumerate(cluster_sums.index)}
            
            print("Calculated grouped map layout")
            self.grouped_map_layout = {
                'overlap_plot_metric': overlap_metric,
                'labels': labels,
                'layout': {k: {'slices': [], **v} for k, v in layout.items()},
                'enriched_cluster_features': enriched_cluster_features
            }
            self.map_clusters = cluster_labels

            if self.search_scope_mask is not None:
                # Rewrite the cluster indexes to match the new values based on the existing search scope mask
                print("Old search scope info", self.search_scope_info)
                self.search_scope_info = {
                    **self.search_scope_info, 
                    "within_selection": np.unique(self.map_clusters[self.search_scope_mask[self.slice_finder.results.eval_indexes]]).tolist(),
                    "partial": True, # this means that the clusters have been rewritten due to layout, so don't update the search
                    "proportion": self.search_scope_mask[self.slice_finder.results.eval_indexes].sum() / len(self.search_scope_mask[self.slice_finder.results.eval_indexes])
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
            self.grouped_map_layout = {
                'overlap_plot_metric': overlap_metric,
                'labels': self.slice_intersection_labels,
                'layout': {}
            }
            self.map_clusters = None
            
        if self.hovered_slice:
            self.update_hovered_slice()