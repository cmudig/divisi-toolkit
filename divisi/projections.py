import numpy as np
import pandas as pd
from sklearn.neighbors import NearestNeighbors

class Projection:
    def __init__(self, coords, method='custom', map_neighbor_dists=None, map_neighbors=None):
        self.coords = coords
        self.method = method
        if map_neighbor_dists is not None and map_neighbors is not None:
            self.map_neighbor_dists = map_neighbor_dists
            self.map_neighbors = map_neighbors
        else:
            neighbors = NearestNeighbors(n_neighbors=min(int(len(self.coords) * 0.02), 1000), 
                                        metric="euclidean").fit(self.coords)
            self.map_neighbor_dists, self.map_neighbors = neighbors.radius_neighbors(self.coords, radius=0.05, sort_results=True)

        self.group_cache = {} # map from task IDs to layout dictionaries
        
    def to_dict(self):
        return {
            "coords": self.coords, 
            "map_neighbor_dists": self.map_neighbor_dists, 
            "map_neighbors": self.map_neighbors
        }
        
    @classmethod
    def from_dict(cls, data):
        return cls(data["coords"], map_neighbor_dists=data["map_neighbor_dists"], map_neighbors=data["map_neighbors"])
        
    def generate_groups(self, identity_labels, task_id=None, other_labels=None):
        """
        Generates a grouping for the projection using the given identity labels.
        If task_id is provided, it should be a hashable object that uniquely 
        identifies the inputs to this function so that if the same inputs are 
        provided, the cached output will be returned.
        
        Returns a tuple where the first element is a dictionary mapping centroid 
        point indexes to dictionaries of coordinates, cluster labels, and metadata.
        The second element is an array of cluster labels for every point in the
        dataset.
        """
        if task_id is not None and task_id in self.group_cache:
            return self.group_cache[task_id]
        
        # The point identity is a matrix with as many rows as points in the
        # projection, where the columns are any values that should be identical
        # in order for the points to be merged in the grouped scatterplot.
        point_identity_mat = np.vstack([identity_labels[n] for n in sorted(identity_labels.keys())]).T

        cluster_labels = np.ones(len(self.coords), dtype=np.int32) * -1
        seen_idxs = set()
        clust_idx = 0
        for point_identity, neighbors in zip(point_identity_mat, self.map_neighbors):
            cluster_idxs = [x for x in neighbors if x not in seen_idxs and (point_identity_mat[x] == point_identity).all()]
            if not cluster_idxs: continue
            cluster_labels[cluster_idxs] = clust_idx
            clust_idx += 1
            seen_idxs |= set(cluster_idxs)

        cluster_labels[cluster_labels < 0] = clust_idx + np.arange((cluster_labels < 0).sum())

        centroids = pd.DataFrame(self.coords, columns=['x', 'y']).groupby(cluster_labels).agg({'x': 'mean', 'y': 'mean'})
        
        metadata = (pd.DataFrame({'point_index': np.arange(self.coords.shape[0]),
                                  'cluster': cluster_labels,
                                  **{n: identity.T.tolist() if len(identity.shape) > 1 else identity 
                                     for n, identity in identity_labels.items()},
                                  **({n: other_label.T.tolist() if len(other_label.shape) > 1 else other_label 
                                     for n, other_label in other_labels.items()} if other_labels is not None else {})})
                    .groupby(cluster_labels)
                    .agg('first'))
        sizes = pd.Series(cluster_labels, name="size").groupby(cluster_labels).size()
        layout = pd.merge(pd.merge(centroids, metadata, how='inner', left_index=True, right_index=True),
                          sizes,
                          how='inner',
                          left_index=True,
                          right_index=True)
        layout = layout.set_index('point_index').to_dict(orient='index')
        map_clusters = pd.Series(cluster_labels)
        
        if task_id is not None:
            self.group_cache[task_id] = (layout, map_clusters)
        return (layout, map_clusters)
            
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