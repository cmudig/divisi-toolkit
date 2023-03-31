import pathlib
import anywidget
import traitlets
import threading
import numpy as np
import pandas as pd
import time
from .slices import Slice
from .filters import *
from .scores import *
from .discretization import DiscretizedData
from .utils import make_mask, powerset, detect_data_type

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
    
    num_slices = traitlets.Int(10).tag(sync=True)
    num_samples = traitlets.Int(50).tag(sync=True)
    should_rerun = traitlets.Bool(False).tag(sync=True)
    should_cancel = traitlets.Bool(False).tag(sync=True)
    running_sampler = traitlets.Bool(False).tag(sync=True)
    num_samples_drawn = traitlets.Int(0).tag(sync=True)
    sampler_run_progress = traitlets.Float(0.0).tag(sync=True)
    score_weights = traitlets.Dict({}).tag(sync=True)
    metrics = traitlets.Dict({})
    positive_only = traitlets.Bool(False).tag(sync=True)
    
    slices = traitlets.List([]).tag(sync=True)
    custom_slices = traitlets.List([]).tag(sync=True)
    custom_slice_results = traitlets.List([]).tag(sync=True)
    
    value_names = traitlets.Dict({}).tag(sync=True)
    
    slice_score_requests = traitlets.Dict({}).tag(sync=True)
    slice_score_results = traitlets.Dict({}).tag(sync=True)
    
    # Adding more slice finding tasks
    search_spec_stack = traitlets.List().tag(sync=True)
    
    selected_slices = traitlets.List([]).tag(sync=True)
    slice_intersection_labels = traitlets.List([]).tag(sync=True)
    slice_intersection_counts = traitlets.List([]).tag(sync=True)
    selected_intersection_index = traitlets.Int(-1).tag(sync=True)
    
    thread_starter = traitlets.Any(default_thread_starter)
    
    def __init__(self, slice_finder, *args, **kwargs):
        try:
            self._esm = DEV_ESM_URL if kwargs.get('dev', False) else (BUNDLE_DIR / "widget-main.js").read_text()
            self._css = DEV_CSS_URL if kwargs.get('dev', False) else (BUNDLE_DIR / "style.css").read_text()
        except FileNotFoundError:
            raise ValueError("No built widget source found, and dev is set to False. To resolve, run npx vite build from the client directory.")
        self.slice_finder = slice_finder
        self._slice_description_cache = {}
        super().__init__(*args, **kwargs)
        if len(self.score_weights) == 0:
            self.score_weights = {s: 1.0 for s in self.slice_finder.score_fns}
        else:
            self.score_weights = {**self.score_weights,
                                  **{n: 0.0 for n in self.slice_finder.score_fns if n not in self.score_weights}}
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
        self.custom_slices = [{}]
        
        self.finder_stack = [self.slice_finder]
        self.search_spec_stack = [{
            "type": "default",
            "score_weights": self.score_weights
        }]
        
    def get_slice_description(self, slice_obj, metrics=None):
        """
        Retrieves a description of the given slice (either from a cache or from
        the slice finder results).
        """
        if not self.slice_finder or not self.slice_finder.results: return
        if slice_obj not in self._slice_description_cache:
            slice_obj = slice_obj.rescore(self.slice_finder.results.score_slice(slice_obj))
            self._slice_description_cache[slice_obj] = self.slice_finder.results.generate_slice_description(slice_obj, metrics=metrics or self.metrics)
        return self._slice_description_cache[slice_obj]
        
    @traitlets.observe("num_slices")
    def num_slices_changed(self, change):
        if not self.slice_finder or not self.slice_finder.results: return
        ranked_results = self.slice_finder.results.rank(self.score_weights, n_slices=change.new)
        self.update_slices(ranked_results)
        
    @traitlets.observe("metrics")
    def metrics_changed(self, change):
        for m_name, m in change.new.items():
            data = m["data"] if isinstance(m, dict) else m
            assert isinstance(data, np.ndarray) and len(data.shape) == 1, f"Metric data '{m_name}' must be 1D ndarray"
        if not self.slice_finder or not self.slice_finder.results: return
        self._slice_description_cache = {}
        self.slices = []
        ranked_results = self.slice_finder.results.rank(self.score_weights, n_slices=self.num_slices)
        self.update_slices(ranked_results, metrics=change.new)
            
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
        self.slices = [
            self.get_slice_description(slice_obj, metrics=metrics or self.metrics)
            for slice_obj in ranked_results
        ]
        
    @traitlets.observe("custom_slices")
    def update_custom_slices(self, change=None):
        encoded_slices = [self.slice_finder.results.encode_slice(s) 
                          for s in (change.new if change is not None else self.custom_slices)]
        self.custom_slice_results = [self.get_slice_description(s, metrics=self.metrics)
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
        
    @traitlets.observe("search_spec_stack")
    def search_spec_stack_changed(self, change=None):
        search_specs = change.new if change is not None else self.search_spec_stack
        if len(search_specs) < len(self.finder_stack):
            self.finder_stack = self.finder_stack[:len(search_specs)]
            self.slice_finder = self.finder_stack[-1]
            self.score_weights = self._base_score_weights_for_spec(search_specs, search_specs[-1], self.slice_finder)
            self._slice_description_cache = {}
            self.rerank_results()
            return
        elif len(search_specs) == len(self.finder_stack): return
        
        assert len(search_specs) <= len(self.finder_stack) + 1
        base_finder = self.finder_stack[0]
        new_spec = search_specs[-1]
        assert "type" in new_spec
        assert "score_weights" in new_spec
        
        new_score_weights = self._base_score_weights_for_spec(search_specs, new_spec, base_finder)
        
        if new_spec["type"] == "default":
            new_finder = base_finder.copy_spec()
        elif new_spec["type"] == "subslice":
            initial_slice = self.slice_finder.results.encode_slice(new_spec["base_slice"])
            new_finder = base_finder.copy_spec(
                initial_slice=initial_slice
            )
        elif new_spec["type"] == "related":
            initial_slice = self.slice_finder.results.encode_slice(new_spec["base_slice"])
            raw_inputs = base_finder.inputs.df if hasattr(base_finder.inputs, 'df') else base_finder.inputs
            ref_mask = make_mask(raw_inputs, initial_slice)
            new_filter = ExcludeIfAll([
                ExcludeFeatureValue(f, v)
                for f, v in initial_slice.feature_values.items()
            ])
            if base_finder.group_filter is not None:
                new_filter = ExcludeIfAny([base_finder.group_filter, new_filter])
            new_finder = base_finder.copy_spec(
                score_fns={**base_finder.score_fns, "Similarity": SliceSimilarityScore(ref_mask)},
                source_mask=base_finder.source_mask & ref_mask,
                group_filter=new_filter,
                similarity_threshold=1.0
            )
            new_score_weights = {"Similarity": 1.0}
        elif new_spec["type"] == "exclude":
            initial_slice = self.slice_finder.results.encode_slice(new_spec["base_slice"])
            new_filter = ExcludeIfAny([
                ExcludeFeatureValue(f, v)
                for f, v in initial_slice.feature_values.items()
            ])
            if base_finder.group_filter is not None:
                new_filter = ExcludeIfAny([base_finder.group_filter, new_filter])
            new_finder = base_finder.copy_spec(
                group_filter=new_filter,
            )       
        elif new_spec["type"] == "counterfactual":
            initial_slice = self.slice_finder.results.encode_slice(new_spec["base_slice"])
            raw_inputs = base_finder.inputs.df if hasattr(base_finder.inputs, 'df') else base_finder.inputs
            ref_mask = make_mask(raw_inputs, initial_slice)
            
            new_filter = ExcludeIfAny([
                ExcludeFeatureValue(f, v)
                for f, v in initial_slice.feature_values.items()
            ])
            if base_finder.group_filter is not None:
                new_filter = ExcludeIfAny([base_finder.group_filter, new_filter])

            new_finder = base_finder.copy_spec(
                score_fns={**base_finder.score_fns, "Similarity": SliceSimilarityScore(ref_mask, metric='superslice')},
                group_filter=new_filter,
                similarity_threshold=1.0
            )     
            new_score_weights = {"Similarity": 1.0}
        else:
            assert False
            
        self.finder_stack.append(new_finder)
        self.slice_finder = new_finder
        self.score_weights = {**new_score_weights,
                              **{n: 0.0 for n in self.slice_finder.score_fns if n not in new_score_weights}}
        self._slice_description_cache = {}
        self.rerank_results()
        # self.should_rerun = True
        
    @traitlets.observe("selected_slices")
    def update_selected_slices(self, change=None):
        selected = change.new if change is not None else self.selected_slices
        
        slice_masks = {}
        
        # Calculate the sizes of all intersections of the given sets
        manager = self.slice_finder.results
        for features in selected:
            slice_obj = manager.encode_slice(features)
            slice_masks[slice_obj] = manager.slice_mask(slice_obj)
            # for feature in slice_obj.feature_values.keys():
            #     univ_slice = Slice({feature: slice_obj.feature_values[feature]})
            #     slice_masks[univ_slice] = manager.slice_mask(univ_slice)
            
        print({s: m.sum() for s, m in slice_masks.items()})
        
        slice_order = list(slice_masks.keys())
        self.slice_intersection_labels = [self.get_slice_description(s) for s in slice_order]
        
        intersect_counts = []
        base_mask = np.arange(manager.df.shape[0])[manager.eval_mask]
        
        def calculate_intersection_counts(prefix, current_mask=None):
            count = current_mask.sum() if current_mask is not None else manager.eval_df.shape[0]
            if count == 0: return
            if len(prefix) == len(slice_order):
                info = {"slices": prefix, 
                                         "count": count}
                for metric_name, data in self.metrics.items():
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
        # for slice_combo in powerset(slice_masks.keys()):
        #     if len(slice_combo) == 0: continue
        #     combined_slice = slice_combo[0]
        #     for s in slice_combo[1:]:
        #         combined_slice = combined_slice.intersect(s)
        #     if combined_slice in intersect_counts: continue
        #     combined_mask = slice_masks[slice_combo[0]].copy()
        #     for s in slice_combo[1:]:
        #         combined_mask &= slice_masks[s]
        #     # print(slice_combo, combined_mask.sum())
        #     intersect_counts[combined_slice] = combined_mask.sum()
        # print(intersect_counts)
        # self.slice_intersection_counts = [
        #     {"slice": self.get_slice_description(s), "count": count}
        #      for s, count in intersect_counts.items()
        #      if count > 0
        # ]