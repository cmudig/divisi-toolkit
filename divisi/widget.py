import pathlib
import anywidget
import traitlets
import threading
import numpy as np
import pandas as pd
import time
from .slices import Slice, SliceFeatureBase
from .sampling import SamplingSliceFinder
from .filters import *
from .scores import *
from .discretization import DiscretizedData
from .utils import powerset, detect_data_type
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
    custom_slice_results = traitlets.List([]).tag(sync=True)
    base_slice = traitlets.Dict({}).tag(sync=True)
    
    value_names = traitlets.Dict({}).tag(sync=True)
    
    slice_score_requests = traitlets.Dict({}).tag(sync=True)
    slice_score_results = traitlets.Dict({}).tag(sync=True)
    
    saved_slices = traitlets.List([]).tag(sync=True)
    selected_slices = traitlets.List([]).tag(sync=True)
    slice_intersection_labels = traitlets.List([]).tag(sync=True)
    slice_intersection_counts = traitlets.List([]).tag(sync=True)
    grouped_map_layout = traitlets.Dict({}).tag(sync=True)
    overlap_plot_metric = traitlets.Unicode("").tag(sync=True)
    selected_intersection_index = traitlets.Int(-1).tag(sync=True)
    
    thread_starter = traitlets.Any(default_thread_starter)
    
    search_scope_info = traitlets.Dict({}).tag(sync=True)
    
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
            score_fn_configs["Large Slice"] = {"type": "SliceSizeScore", "ideal_fraction": 0.2, "spread": 0.1}
            score_weights["Large Slice"] = 0.5
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
                
        self.metrics = kwargs.get("metrics", {})
        self.derived_metrics = {**self.metrics}
        self.derived_metric_config = {k: { "expression": f"{{{k}}}" } for k in self.metrics}
        self.score_functions = kwargs.get("score_functions", {})
        self.score_function_config = score_fn_configs
        self._slice_description_cache = {}

        self.slice_finder = SamplingSliceFinder(
            discrete_data,
            self.score_functions,
            source_mask=parse_metric_expression(self.source_mask_expr, self.derived_metrics) if self.source_mask_expr else None,
            min_items=len(data) * 0.5 * self.min_items_fraction,
            holdout_fraction=0.5,
            max_features=self.max_features,
            positive_only=self.positive_only,
            similarity_threshold=0.9
        )
        
        self.score_weights = score_weights
        
        df = pd.DataFrame(discrete_data.df, columns=np.arange(discrete_data.df.shape[1])).astype('category')
        self.discrete_vector_rep = pd.get_dummies(df).values.astype(np.uint8)

        if "map_layout" in kwargs:
            self.map_layout = kwargs["map_layout"]
        else:
            from sklearn.manifold import TSNE

            self.map_layout = TSNE(verbose=False, metric='cosine').fit_transform(self.discrete_vector_rep[self.slice_finder.results.eval_indexes])
        self.map_layout = (self.map_layout - self.map_layout.min(axis=0)) / (self.map_layout.max(axis=0) - self.map_layout.min(axis=0))
            
        neighbors = NearestNeighbors(n_neighbors=min(int(len(discrete_data) * 0.02), 1000), 
                                                metric="euclidean").fit(self.map_layout)
        self.map_neighbor_dists, self.map_neighbors = neighbors.radius_neighbors(self.map_layout, radius=0.05, sort_results=True)
        self.discovery_neighbors = NearestNeighbors(metric="cosine").fit(self.discrete_vector_rep[self.slice_finder.discovery_mask])
        
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
        self.update_selected_slices()
        
    def get_slice_description(self, slice_obj, metrics=None):
        """
        Retrieves a description of the given slice (either from a cache or from
        the slice finder results).
        """
        if not self.slice_finder or not self.slice_finder.results: return
        if slice_obj not in self._slice_description_cache:
            slice_obj = slice_obj.rescore(self.slice_finder.results.score_slice(slice_obj))
            self._slice_description_cache[slice_obj] = self.slice_finder.results.generate_slice_description(slice_obj, metrics=metrics or self.derived_metrics)
        return self._slice_description_cache[slice_obj]
        
    @traitlets.observe("num_slices")
    def num_slices_changed(self, change):
        if not self.slice_finder or not self.slice_finder.results: return
        ranked_results = self.slice_finder.results.rank(self.score_weights, n_slices=change.new)
        self.update_slices(ranked_results)
        
    @traitlets.observe("derived_metrics")
    def metrics_changed(self, change=None):
        mets = change.new if change is not None else self.derived_metrics
        for m_name, m in mets.items():
            data = m["data"] if isinstance(m, dict) else m
            assert isinstance(data, np.ndarray) and len(data.shape) == 1, f"Metric data '{m_name}' must be 1D ndarray"
        if not self.slice_finder or not self.slice_finder.results: return
        self._slice_description_cache = {}
        self.slices = []
        ranked_results = self.slice_finder.results.rank(self.score_weights, n_slices=self.num_slices)
        self.update_slices(ranked_results, metrics=mets)
        self.update_selected_slices()
            
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
                self.num_samples_drawn += len(sampled_idxs)
                ranked_results = results.rank(self.score_weights, n_slices=self.num_slices)
                self.update_slices(ranked_results)
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

    @traitlets.observe("score_weights")
    def rerank_results(self, change=None):
        if not self.slice_finder or not self.slice_finder.results: return
        weights = change.new if change is not None else self.score_weights
        ranked_results = self.slice_finder.results.rank(weights, n_slices=self.num_slices)
        self.update_slices(ranked_results)
        
    def update_slices(self, ranked_results, metrics=None):
        self.update_custom_slices()
        self.base_slice = self.get_slice_description(Slice(SliceFeatureBase()), metrics=metrics or self.derived_metrics)
        self.slices = [
            self.get_slice_description(slice_obj, metrics=metrics or self.derived_metrics)
            for slice_obj in ranked_results
        ]
        
    @traitlets.observe("custom_slices")
    def update_custom_slices(self, change=None):
        encoded_slices = [self.slice_finder.results.encode_slice(s) 
                          for s in (change.new if change is not None else self.custom_slices)]
        self.custom_slice_results = [self.get_slice_description(s, metrics=self.derived_metrics)
                                     for s in encoded_slices]

    @traitlets.observe("slice_score_requests")
    def slice_score_request(self, change):
        if not self.slice_finder or not self.slice_finder.results: return
        self.slice_score_results = {k: self.get_slice_description(self.slice_finder.results.encode_slice(f)) 
                                    for k, f in change.new.items()}
        
    def _base_score_weights_for_spec(self, search_specs, spec, slice_finder):
        if not all(n in slice_finder.score_fns for n in spec["score_weights"]):
            return search_specs[0]["score_weights"]
        else:
            return spec["score_weights"]
        
    @traitlets.observe("search_scope_info")        
    def update_search_scopes(self, 
                             change=None):
        search_info = change.new if change is not None else self.search_scope_info
        
        if not search_info:
            self.slice_finder = self.original_slice_finder
            self.score_weights = {s: w for s, w in self.score_weights.items() if s != "Search Scope"}
            self.search_scope_mask = None
            self._slice_description_cache = {}
            self.rerank_results()
            return
        
        base_finder = self.original_slice_finder
        new_score_fns = {}
        initial_slice = base_finder.initial_slice
        new_source_mask = (base_finder.source_mask.copy() 
                           if base_finder.source_mask is not None 
                           else np.ones_like(base_finder.discovery_mask))
        exclusion_criteria = None
        
        if "within_slice" in search_info:
            contained_in_slice = base_finder.results.encode_slice(search_info["within_slice"])
            if contained_in_slice.feature != SliceFeatureBase():
                raw_inputs = base_finder.inputs.df if hasattr(base_finder.inputs, 'df') else base_finder.inputs
                ref_mask = contained_in_slice.make_mask(raw_inputs).cpu().numpy()
                new_score_fns["Search Scope"] = OutcomeRateScore(ref_mask)
                new_source_mask &= ref_mask
                self.search_scope_mask = ref_mask
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
                selection_vectors = self.discrete_vector_rep[self.slice_finder.results.eval_indexes][mask]
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
                print(f"All mask has {all_mask.sum()}/{len(all_mask)}")
                self.search_scope_mask = all_mask
                
                new_score_fns["Search Scope"] = OutcomeRateScore(self.search_scope_mask)
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
        new_finder = base_finder.copy_spec(
            score_fns={**base_finder.score_fns, **new_score_fns},
            source_mask=new_source_mask,
            group_filter=new_filter,
            initial_slice=initial_slice,
        )
        print(new_finder, new_source_mask.sum(), new_score_fns)
        self.slice_finder = new_finder
        self.score_weights = {**{n: w for n, w in self.score_weights.items() if n in base_finder.score_fns},
                              **{n: self.slice_finder.max_weight for n in new_score_fns}}
        self._slice_description_cache = {}
        self.rerank_results()

    @traitlets.observe("score_function_config")
    def update_score_functions(self, change=None):
        configs = change.new if change is not None else self.score_function_config
        
        self.score_functions = {
            n: ScoreFunctionBase.from_configuration(config, self.derived_metrics) 
            if config.get("editable", True) else self.score_functions.get("n", None)
            for n, config in configs.items()
        }
        if self.slice_finder is not None:
            self.slice_finder.rescore(self.score_functions)
            print(self.slice_finder.results.results, self.score_functions, self.score_weights)
            self.rerank_results()

    @traitlets.observe("derived_metric_config")
    def update_derived_metrics(self, change=None):
        configs = change.new if change is not None else self.derived_metric_config
        
        self.derived_metrics = {
            n: {
                **(self.metrics[n] if isinstance(self.metrics.get(n, None), dict) else {}),
                "data": parse_metric_expression(config["expression"], self.metrics),
            }
            for n, config in configs.items()
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
        
    @traitlets.observe("selected_slices")
    def update_selected_slices(self, change=None, overlap_metric=None):
        selected = change.new if change is not None else self.selected_slices
        overlap_metric = overlap_metric if overlap_metric is not None else self.overlap_plot_metric
        
        slice_masks = {}
        
        # Calculate the sizes of all intersections of the given sets
        manager = self.slice_finder.results
        for s in selected:
            slice_obj = manager.encode_slice(s['feature'])
            slice_masks[slice_obj] = manager.slice_mask(slice_obj).cpu().numpy()
                    
        slice_order = list(slice_masks.keys())
        labels = [self.get_slice_description(s) for s in slice_order]
        
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

        if self.map_layout is not None and overlap_metric:
            error_metric = self.derived_metrics[overlap_metric]
            if isinstance(error_metric, dict): error_metric = error_metric["data"]
            error_metric = error_metric[self.slice_finder.results.eval_indexes]
            
            # The point identity is a matrix with as many rows as points in the
            # eval set, where the columns are any values that should be identical
            # in order for the points to be merged in the grouped scatterplot.
            point_identity_mat = np.vstack([error_metric, 
                                            *([self.search_scope_mask[self.slice_finder.results.eval_indexes]] 
                                              if self.search_scope_mask is not None else []), 
                                            *list(slice_masks.values())]).T

            cluster_labels = np.ones(len(self.map_layout), dtype=np.int32) * -1
            seen_idxs = set()
            clust_idx = 0
            for point_identity, neighbors in zip(point_identity_mat, self.map_neighbors):
                cluster_idxs = [x for x in neighbors if x not in seen_idxs and (point_identity_mat[x] == point_identity).all()]
                if not cluster_idxs: continue
                cluster_labels[cluster_idxs] = clust_idx
                clust_idx += 1
                seen_idxs |= set(cluster_idxs)

            cluster_labels[cluster_labels < 0] = clust_idx + np.arange((cluster_labels < 0).sum())

            centroids = pd.DataFrame(self.map_layout, columns=['x', 'y']).groupby(cluster_labels).agg({'x': 'mean', 'y': 'mean'})
            print(error_metric.shape, self.map_layout.shape, [slice_masks[o].shape for i, o in enumerate(slice_order)])
            metadata = (pd.DataFrame({'outcome': error_metric, 
                                      'point_index': np.arange(self.map_layout.shape[0]),
                                      'cluster': cluster_labels,
                                     **{'slice_' + str(i): slice_masks[o] for i, o in enumerate(slice_order)}})
                        .groupby(cluster_labels)
                        .agg('first'))
            sizes = pd.Series(cluster_labels).groupby(cluster_labels).size()
            centroids['outcome'] = metadata['outcome']
            centroids['slices'] = metadata[['slice_' + str(i) for i in range(len(slice_order))]].values.tolist()
            centroids['cluster'] = metadata['cluster']
            centroids['size'] = sizes
            self.grouped_map_layout = {
                'overlap_plot_metric': overlap_metric,
                'labels': labels,
                'layout': centroids.set_index(metadata['point_index'], drop=True).to_dict(orient='index')
            }
            self.map_clusters = pd.Series(cluster_labels)
            if "within_selection" in self.search_scope_info and self.search_scope_mask is not None:
                # Rewrite the cluster indexes to match the new values based on the existing search scope mask
                print("Old search scope info", self.search_scope_info)
                self.search_scope_info = {
                    **self.search_scope_info, 
                    "within_selection": np.unique(self.map_clusters[self.search_scope_mask[self.slice_finder.results.eval_indexes]]).tolist(),
                    "partial": True # this means that the clusters have been rewritten due to layout, so don't update the search
                }
                print("Edited search scope info", self.search_scope_info)
            else:
                print("Not changing search scope info", self.search_scope_info, self.search_scope_mask)
                
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