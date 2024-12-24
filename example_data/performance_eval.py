import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import tqdm
import torch
import traceback
import time
import pickle
import xgboost
import json
import re
import os
import gc
import divisi
from nltk.corpus import stopwords
from sklearn.model_selection import train_test_split
from scipy.sparse import csr_matrix, load_npz
import sys; sys.path.insert(0, '../divexplorer')
from divexplorer import DivergenceExplorer

def load_adult():
    df = pd.read_csv("../../uci_adult/adult.csv")
    
    discrete_df = divisi.discretize_data(df, {
        'age': { "method": "bin", "bins": [25, 45, 65] }, 
        'workclass': { "method": "unique" }, 
        'education': { "method": "unique" }, 
        'marital-status': { "method": "unique" }, 
        'occupation': { "method": "unique" }, 
        'relationship': { "method": "unique" }, 
        'race': { "method": "unique" }, 
        'gender': { "method": "unique" },   
        'capital-gain': { "method": "bin", "bins": [1] }, 
        'capital-loss': { "method": "bin", "bins": [1] }, 
        'hours-per-week': { "method": "bin", "bins": [40] }, 
        'native-country': { "method": lambda x, c: (x != 'United-States', {0: 'US', 1: 'Non-US'}) },
    })
    
    df_prepped = df.drop(columns=['fnlwgt', 'educational-num'])

    X = df_prepped.drop(columns=['income'])
    y = df_prepped['income'] == '>50K'

    X_continous  = X[['age', 'capital-gain', 'capital-loss', 'hours-per-week']]

    X_categorical = X[['workclass', 'education', 'marital-status', 'occupation', 'relationship', 'race',
                    'gender', 'native-country']]

    X_encoded = pd.get_dummies(X_categorical)
    X = pd.concat([X_continous, X_encoded], axis=1)

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, stratify=y, random_state=1)

    model = xgboost.XGBClassifier(random_state=1)
    model.fit(X_train, y_train)

    print(model.score(X_test, y_test))

    model_preds = model.predict(X)
    discrete_outcomes = model_preds != y # df["income"] == ">50K"
    print(discrete_outcomes.mean())

    metrics = {"error": discrete_outcomes.values}
    score_fns = {
        "error_rate": {"fn": divisi.OutcomeRateScore(discrete_outcomes.values), "type": "OutcomeRate", "metric": "error"},
        "slice_size": {"fn": divisi.SliceSizeScore(1, spread=0.5), "type": "SliceSize", "mean": 1.0, "std": 0.5},
    }
    
    return discrete_df, metrics, score_fns, {
        "max_features": 3, 
        "source_mask": discrete_outcomes.values,
        "weights": {
            "error_rate": 1.0,
            "slice_size": 0.1
        }}

def load_reviews():
    reviews = pd.read_csv("example_data/yelp_reviews_500k.csv", dtype={'stars': int})
    keywords = pd.read_csv("example_data/yelp_reviews_keywords_500k.csv", index_col=0)

    with open("example_data/yelp_train_test_split_whole.pkl", "rb") as file:
        train_idx, val_idx, test_idx = pickle.load(file)
    val_reviews = reviews.iloc[test_idx]
    # test_reviews = reviews.iloc[test_idx]

    with open("example_data/yelp_test_pred_500k.pkl", "rb") as file:
        val_pred, val_true = pickle.load(file)

    bow_mat = load_npz("example_data/yelp_val_500k_bow_mat.npz")
    with open("example_data/yelp_val_500k_bow_data.pkl", "rb") as file:
        num_features, cols_to_keep, allowed_words, feature_word_idx, feature_idx_word = pickle.load(file)

    import divisi as sf

    def iter_reviews():
        for _ in range(1):
            num_returned = 0
            for i, row in tqdm.tqdm(val_reviews.iterrows(), total=len(val_reviews)):
                yield re.split(r"[^A-z0-9]+", row["text"].lower())
                num_returned += 1
                # if num_returned >= 100000: break
                        
    discrete_data = sf.discretization.discretize_token_sets(iter_reviews(),
                                                            token_idx_mapping=feature_word_idx, 
                                                            n_top_columns=2000,
                                                            max_column_mean=0.5)

    criterion = (val_pred - val_true >= 3) #[:100000] # (val_pred >= 2) != (val_true >= 2)

    metrics = {"polarity": criterion}
    score_fns = {
        "wrong_polarity": {"fn": sf.OutcomeRateScore(criterion), "type": "OutcomeRate", "metric": "polarity"},
        "slice_size": {"fn": sf.SliceSizeScore(1.0, spread=0.5), "type": "SliceSize", "mean": 1.0, "std": 0.5},
    }
    print(len(discrete_data))
    
    return discrete_data, metrics, score_fns, {
        "max_features": 3, 
        "source_mask": criterion,
        "positive_only": True,
        "weights": {
            "wrong_polarity": 1.0,
            "slice_size": 0.01
        }}

def load_airline():
    df_train = pd.read_csv("example_data/train-airline.csv")
    df_test = pd.read_csv("example_data/test-airline.csv")
    df_all = pd.concat([df_train, df_test])
    # print(df_all.tail())
    df_prepped = df_all.drop(columns=['index', 'id'])
    # print(df_prepped.tail())
    
    # Some more processing
    def map_to_category(value):
        if value == 0:
            return "not applicable"
        elif value == 1:
            return "not satisfied"
        elif 2 <= value <= 4:
            return "neutral"
        elif value == 5:
            return "very satisfied"
        else:
            return "unknown" 
            
    columns_5 = [
        "Inflight wifi service",
        "Departure/Arrival time convenient",
        "Ease of Online booking",
        "Gate location",
        "Food and drink",
        "Online boarding",
        "Seat comfort",
        "Inflight entertainment",
        "On-board service",
        "Leg room service",
        "Baggage handling",
        "Checkin service",
        "Inflight service",
        "Cleanliness"
    ]

    df_prepped_cat = df_prepped.copy()

    for column in columns_5:
        df_prepped_cat[column] = df_prepped_cat[column].apply(map_to_category)

    # print(df_prepped_cat.head())
    
    # Adapting the simple XGBoost model from example_adult to predict whether a passenger is satisfied
    y = df_prepped_cat['satisfaction'] == 'satisfied'
        
    # Discretize the dataset using a different method per-column so that we can perform slicing.

    discrete_df = divisi.discretization.discretize_data(df_prepped_cat, {
        'Gender': { "method": "unique" }, 
        'Customer Type': { "method": "unique" }, 
        'Age': { "method": "bin", "bins": [25, 40, 50, 85] }, 
        'Type of Travel': { "method": "unique" }, 
        'Class': { "method": "unique" }, 
        'Flight Distance': { "method": "bin", "bins": [500, 1000, 2000, 10000, 130000] }, #change this
        'Inflight wifi service': {  "method": "unique" }, 
        'Departure/Arrival time convenient': {  "method": "unique" }, 

        'Ease of Online booking': {  "method": "unique" }, 
        'Gate location': {  "method": "unique" }, 
        'Food and drink': {  "method": "unique" }, 
        'Online boarding': { "method": "unique" }, 
        'Seat comfort': { "method": "unique" },
        
        'Inflight entertainment': { "method": "unique" }, 
        'On-board service': { "method": "unique" }, 
        'Leg room service': { "method": "unique" }, 
        'Baggage handling': { "method": "unique" }, 
        'Checkin service': { "method": "unique" }, 
        
        'Inflight service': { "method": "unique" }, 
        'Cleanliness': { "method": "unique" }, 
        
        'Departure Delay in Minutes': { "method": "bin", "bins": [0, 15, 30, 60, 1000] }, 
        'Arrival Delay in Minutes': { "method": "bin", "bins": [0, 15, 30, 60, 1000] }, 
    })
    
    metrics = { "dissatisfaction": 1 - y.values}
    score_fns = {
        # "error": divisi.OutcomeRateScore(is_error.values),
        "dissatisfaction": {"fn": divisi.OutcomeRateScore(1 - y.values), "type": "OutcomeRate", "metric": "dissatisfaction"},
        "slice_size": {"fn": divisi.SliceSizeScore(1, spread=0.5), "type": "SliceSize", "mean": 1.0, "std": 0.5},
    }

    return discrete_df, metrics, score_fns, {
        "max_features": 3, 
        "source_mask": 1 - y.values,
        "weights": {
            "dissatisfaction": 1.0,
            "slice_size": 0.1
        }}

def run_recursive(results_path, discrete_df, metrics, score_fns, **kwargs):
    a = time.time()
    results, num_scored = divisi.find_slices_recursive(
        discrete_df.df, 
        {n: fn['fn'] for n, fn in score_fns.items()}, 
        kwargs.get("max_features", 3), 
        kwargs.get("num_results", 100), 
        min_items=int(kwargs.get("min_items_fraction") * len(discrete_df)), 
        positive_only=kwargs.get("positive_only", False),
        weights=kwargs.get("weights")
    )
    b = time.time()
    if os.path.exists(results_path):
        with open(results_path, "r") as file:
            existing_results = json.load(file)
    else:
        existing_results = []
    with open(results_path, "w") as file:
        json.dump([*existing_results, {
            "method": "recursive",
            "min_items_fraction": kwargs.get("min_items_fraction"),
            "time": float(b - a),
            "results": divisi.utils.convert_to_native_types([discrete_df.describe_slice(s) for s in results]),
            "num_scored": num_scored
        }], file)

def run_sampling(results_path, discrete_df, metrics, score_fns, **kwargs):
    a = time.time()
    slice_finder = divisi.sampling.SamplingSliceFinder(
        discrete_df,
        {n: fn['fn'] for n, fn in score_fns.items()},
        source_mask=kwargs.get("source_mask", None),
        min_items=int(kwargs.get("min_items_fraction") * len(discrete_df)),
        max_features=kwargs.get("max_features", 3),
        num_candidates=kwargs.get("num_candidates", 50),
        positive_only=kwargs.get("positive_only", False),
        final_num_candidates=None,
        n_workers=1,
        show_progress=False,
        scoring_fraction=1.0,
        similarity_threshold=1.0,
    )
    fast_results = slice_finder.sample(kwargs.get("num_samples", 20))[0].rank(kwargs.get("weights"), n_slices=kwargs.get("num_results", 100), order_features=False, normalize_weights=False)
    b = time.time()
    if os.path.exists(results_path):
        with open(results_path, "r") as file:
            existing_results = json.load(file)
    else:
        existing_results = []
    with open(results_path, "w") as file:
        json.dump([*existing_results, {
            "method": "sampling",
            "trial": kwargs.get("trial", 0),
            "num_samples": kwargs.get("num_samples", 20),
            "num_candidates": kwargs.get("num_candidates", 50),
            "min_items_fraction": kwargs.get("min_items_fraction"),
            "time": float(b - a),
            "results": divisi.utils.convert_to_native_types([discrete_df.describe_slice(s) for s in fast_results]),
            "num_scored": len(slice_finder.all_scores)
        }], file)
        
def run_divexplore(results_path, discrete_df, metrics, score_fns, **kwargs):
    metric_names = sorted(metrics.keys())
    div_df = pd.DataFrame(np.hstack([discrete_df.df.toarray() if isinstance(discrete_df.df, csr_matrix) else discrete_df.df,
                                     *(metrics[n].reshape(-1, 1) for n in metric_names)]))
    div_df.columns = div_df.columns.astype(str)
    div_df = div_df.rename(columns={div_df.columns[i + discrete_df.df.shape[1]]: n for i, n in enumerate(metric_names)})
    a = time.time()
    fp_diver = DivergenceExplorer(div_df)
    
    subgroups = fp_diver.get_pattern_divergence(min_support=kwargs.get("min_items_fraction"), max_len=3, boolean_outcomes=metric_names)

    candidates = subgroups[subgroups['length'] <= kwargs.get("max_features", 3)].reset_index(drop=True)
    print(len(candidates), "candidates to score")
    scores = {}
    for fn_name, fn in score_fns.items():
        if fn["type"] == "OutcomeRate":
            scores[fn_name] = candidates[fn["metric"]]
        elif fn["type"] == "SliceSize":
            scores[fn_name] = np.exp(-0.5 * ((candidates["support"] - fn["mean"]) / fn["std"]) ** 2)
    scores = pd.DataFrame(scores)
    final_scores = None
    for fn_name, weight in kwargs.get("weights").items():
        if final_scores is None: final_scores = scores[fn_name] * weight
        else: final_scores += scores[fn_name] * weight
        
    results = []
    for result_idx in final_scores.sort_values(ascending=False).head(kwargs.get("num_results", 100)).index:
        comps = [c.split('=') for c in candidates['itemset'].iloc[result_idx]]
        results.append(divisi.slices.IntersectionSlice([divisi.slices.SliceFeature(int(c[0]), [int(c[1])])
                                                        for c in comps]).rescore(scores.iloc[result_idx].to_dict()))
    b = time.time()

    if os.path.exists(results_path):
        with open(results_path, "r") as file:
            existing_results = json.load(file)
    else:
        existing_results = []
    with open(results_path, "w") as file:
        json.dump([*existing_results, {
            "method": "divexplore",
            "min_items_fraction": kwargs.get("min_items_fraction"),
            "time": float(b - a),
            "results": divisi.utils.convert_to_native_types([discrete_df.describe_slice(s) for s in results]),
            "num_scored": len(scores)
        }], file)

    
if __name__ == '__main__':
    results_dir = "performance_eval_results"
    if not os.path.exists(results_dir):
        os.mkdir(results_dir)
    for dataset_name, dataset in [('adult', load_adult)]: # , ('airline', load_airline), ('reviews', load_reviews)]:
        print(dataset_name)
        data = dataset()
        
        gc.collect()
        for method_name, method in [('recursive', run_recursive), ('sampling', run_sampling), ('divexplore', run_divexplore)]:
            print(method_name)
            if dataset_name == 'reviews' and method_name == 'divexplore': continue

            for min_items_fraction in [0.1, 0.05, 0.02, 0.01]:
                if method_name == 'sampling':
                    for num_candidates in [50]: # [10, 50, 100]:
                        print("num candidates", num_candidates)
                        for n_samples in [10, 20, 50, 100, 200]:
                            for trial in range(10):
                                try:
                                    # import cProfile
                                    # cProfile.run("""
                                    method(os.path.join(results_dir, f"{dataset_name}_{method_name}.json"), 
                                            *data[:-1], 
                                            **data[-1], 
                                            num_samples=n_samples,
                                            num_candidates=num_candidates,
                                            min_items_fraction=min_items_fraction,
                                            trial=trial)
                                    # """, sort='tottime')
                                    # exit(0)
                                except:
                                    print(traceback.format_exc())
                                finally:
                                    gc.collect()
                                    time.sleep(2)
                else:
                    try:
                        method(os.path.join(results_dir, f"{dataset_name}_{method_name}.json"), 
                               *data[:-1], 
                               **data[-1],
                               min_items_fraction=min_items_fraction)
                    except:
                        print(traceback.format_exc())
                    finally:
                        gc.collect()
                        time.sleep(10)
