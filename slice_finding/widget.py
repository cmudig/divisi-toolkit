import pathlib
import anywidget
import traitlets
import threading
import numpy as np
import time

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
    num_samples = traitlets.Int(10).tag(sync=True)
    should_rerun = traitlets.Bool(False).tag(sync=True)
    running_sampler = traitlets.Bool(False).tag(sync=True)
    num_samples_drawn = traitlets.Int(0).tag(sync=True)
    sampler_run_progress = traitlets.Float(0.0).tag(sync=True)
    score_weights = traitlets.Dict({}).tag(sync=True)
    
    slices = traitlets.List([]).tag(sync=True)
    
    thread_starter = traitlets.Any(default_thread_starter)
    
    def __init__(self, slice_finder, *args, **kwargs):
        try:
            self._esm = DEV_ESM_URL if kwargs.get('dev', False) else (BUNDLE_DIR / "widget-main.js").read_text()
            self._css = DEV_CSS_URL if kwargs.get('dev', False) else (BUNDLE_DIR / "style.css").read_text()
        except FileNotFoundError:
            raise ValueError("No built widget source found, and dev is set to False. To resolve, run npx vite build from the client directory.")
        super().__init__(*args, **kwargs)
        self.slice_finder = slice_finder
        if len(self.score_weights) == 0:
            self.score_weights = {s: 1.0 for s in self.slice_finder.score_fns}
        
    @traitlets.observe("num_slices")
    def num_slices_changed(self, change):
        ranked_results = self.slice_finder.results.rank(self.score_weights, n_slices=change.new)
        self.update_slices(ranked_results)
            
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
            sample_step = max(10, self.num_samples // 5)
            for i in range(0, self.num_samples, sample_step):
                results, sampled_idxs = self.slice_finder.sample(min(sample_step, self.num_samples - i))
                self.num_samples_drawn += len(sampled_idxs)
                ranked_results = results.rank(self.score_weights, n_slices=self.num_slices)
                self.update_slices(ranked_results)
                self.sampler_run_progress += len(sampled_idxs) / self.num_samples
            self.running_sampler = False
            
            time.sleep(0.01)
            self.sampler_run_progress = 0.0
        except Exception as e:
            print(e)
            self.running_sampler = False
            self.logs += e
            raise e

    def update_slices(self, ranked_results):
        self.slices = [
            {"featureValues": slice_obj.feature_values,
            "scoreValues": slice_obj.score_values}
            for slice_obj in ranked_results
        ]