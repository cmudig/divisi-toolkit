# Divisi - Interactive Subgroup Discovery

Divisi is a tool to find interpretable patterns in large datasets that can be
expressed as tabular features (for example, transactions, survey responses, 
electronic health records, or text documents). It runs faster than existing rule-based 
subgroup discovery algorithms and has an interactive interface to help you probe
and curate subgroups of interest. [Check out the paper](https://arxiv.org/abs/2502.10537)
(CHI 2025) to learn more.

## Quickstart

Optionally create a virtual environment with Python >3.7. Install the package:

```bash
pip install divisi-toolkit
```

Install Jupyter Notebook or Jupyter Lab if not already installed. Then start a
Jupyter server. The `example_data/demo.ipynb` notebook shows how to start
the interactive widget or use the subgroup discovery algorithm programmatically.

## Usage

To run Divisi, you first need to create a preprocessed, discretized version of 
your dataset. The easiest way is to take a Pandas dataframe and run the 
`discretize_data` command:

```python
import divisi

discrete_df = divisi.discretize_data(
    df, 
    custom_cols={
        # Specify custom discretization strategies here
        'Age': divisi.bin_values(quantiles=5),
        # ...
    }, 
    remove_cols=[
        # Specify columns to remove from subgroup discovery
        'Label'
        # ...
    ])
```

If you have a text dataset, you can also use the `discretize_token_sets` method.
(**TODO** provide example of text encoding)

Then, to use the Divisi interface in a notebook, simply create a `DivisiWidget`
instance:

```python
w = divisi.DivisiWidget(
    discrete_df, 
    # provide a path to store interface state so you can pick up where you left off
    state_path="divisi_state",
    # metrics to display for each subgroup (must be numpy arrays)
    metrics={
        "Label": y,
        "Error": is_error
    })
w
```

By default, ranking functions will be created based on the metrics you provide.
You can also provide ranking functions using the `ranking_functions` keyword
argument to the `DivisiWidget` constructor. The following ranking functions are
available in `divisi.ranking`:

* `OutcomeRate(y: ndarray, inverse: bool = false)`: Prioritizes subgroups with a
    higher rate of the given binary outcome `y` within the subgroup. If `inverse` is
    `True`, prioritizes subgroups with a lower rate.
* `OutcomeShare(y: ndarray)`: Prioritizes subgroups that capture more of the
    positive instances of the binary outcome `y`. Helps to measure coverage of the
    subgroup.
* `InteractionEffect(y: ndarray)`: Prioritizes subgroups for which all rule
    features contribute highly to the rate of the given binary outcome.
* `MeanDifference(y: ndarray)`: Prioritizes subgroups which have a mean of the
    given continuous metric `y` substantially different from the average.
* `Entropy(y: ndarray, inverse: bool = false)`: Prioritizes subgroups with a
    lower (or, if `inverse` is `True`, higher) entropy for the given 
    integer-valued metric `y` inside the subgroup than outside.
* `SubgroupSize(ideal_fraction: number, spread: number)`: Scores subgroups by
    their size according to a Gaussian curve with a mean of `ideal_fraction` and
    a standard deviation of `spread`.
* `SimpleRule()`: Prioritizes subgroups defined by rules with fewer features.

### Programmatic Usage

To generate subgroups using pure Python without the interface, initialize an
instance of `SamplingSubgroupSearch` with the discretized data object, ranking
functions, and any search parameters, then run the sampler:

```python
finder = divisi.sampling.SamplingSubgroupSearch(
    discrete_df,
    {
        "High True Labels": divisi.ranking.OutcomeRate(y),
        "High Errors": divisi.ranking.OutcomeRate(is_error),
        "Simple Rule": divisi.ranking.SimpleRule()
    },
    # additional sampling options
    min_items_fraction=0.05
    # ...
)

results, _ = finder.sample(50)
```

After running the sampler, you can re-rank the results based on the provided
ranking functions without rerunning the search:

```python
for rule in results.rank({"High True Labels": 1.0, "Simple Rule": 0.25}):
    # rule.feature gets the predicate, rule.score_values contains the scores for each ranking function
    print(rule)
    # make a boolean mask over the dataframe corresponding to the rule
    mask = discrete_df.mask_for_rule(rule)
```

## Citation

Please use the following citation if using Divisi in your projects:

```bibtex
@inproceedings{sivaraman2025divisi,
	title = {{Divisi: Interactive Search and Visualization for Scalable Exploratory Subgroup Analysis}},
	author = {Sivaraman, Venkatesh and Li, Zexuan and Perer, Adam},
	year = {2025},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    doi = {10.1145/3706598.3713103},
    booktitle = {Proceedings of the CHI Conference on Human Factors in Computing Systems},
    numpages = {17},
    location = {Yokohama, Japan},
    series = {CHI '25}
}
```

If you have a cool use case for Divisi, [tell us about it](mailto:venkats@cmu.edu)!

## Running in Development Mode

To develop the frontend, make sure you have an up-to-date version of NodeJS in
your terminal, then run:

```bash
cd client
npm install
vite
```

The `vite` command starts a live hot-reload server for the frontend. Then, when
you initialize the `DivisiWidget`, pass the `dev=True` keyword argument to
use the live server. (Make sure that you don't have anything else running on
port 5173 while you do this.)