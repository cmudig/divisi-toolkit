# Divisi - Interactive Slice Finding

## Demo Quickstart

Optionally create a virtual environment with Python >3.7 to run the demo.

Install the package:

```bash
pip install divisi-toolkit
```

Install Jupyter Notebook or Jupyter Lab if not already installed. Then start a
Jupyter server. The `example_data/example_adult.ipynb` notebook shows how to use
the slice finding widget.

## Running in Development Mode

To develop the frontend, make sure you have an up-to-date version of NodeJS in
your terminal, then run:

```bash
cd client
npm install
vite
```

The `vite` command starts a live hot-reload server for the frontend. Then, when
you initialize the `SliceFinderWidget`, pass the `dev=True` keyword argument to
use the live server. (Make sure that you don't have anything else running on
port 5173 while you do this.)