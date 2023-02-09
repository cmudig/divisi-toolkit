import numpy as np


# TODO: delete this file by replacing it's usage with score functions in scores.py
def calc_entropy(inputs):
    """
    Calculates the Shannon entropy of the given inputs, where inputs is an
    array or series of discrete values.
    """
    unique, counts = np.unique(inputs, return_counts=True)
    return -np.sum((counts / len(inputs)) * np.log2(counts / len(inputs)))


def entropy_difference(outcomes, mask):
    """
    Calculates a score that is higher when the distribution of outcomes
    inside the given mask has a LOWER entropy than the distribution
    overall.

    Args:
        outcomes: A 1D or 2D array of discrete outcome values.
        mask: A 1D boolean array indicating whether each row
            is part of the slice being evaluated or not.
    """
    if len(outcomes.shape) > 1:
        return sum([calc_entropy(outcomes[:, i]) / calc_entropy(outcomes[mask, i])
                    for i in range(outcomes.shape[1])]) / outcomes.shape[1]
    else:
        if calc_entropy(outcomes[mask]) > 0:
            return calc_entropy(outcomes) / calc_entropy(outcomes[mask])
        else:
            return 0


def mean_difference_l1(outcomes, mask):
    """
    Calculates a score that is higher when there is a larger difference
    between the average outcomes inside the given mask and the overall
    dataset, normalized by the population standard deviation.

    Args:
        outcomes: A 1D or 2D array of discrete (but ordered) outcome
            values.
        mask: A 1D boolean array indicating whether each row
            is part of the slice being evaluated or not.
    """
    if len(outcomes.shape) > 1:
        return np.abs(np.mean((outcomes[mask].mean(axis=0) - outcomes.mean(axis=0)) / outcomes.std(axis=0)))
    else:
        return (outcomes[mask].mean() - outcomes.mean()) / outcomes.std()


def group_size(outcomes, mask):
    return np.log2(1 + mask.sum() / len(mask))
