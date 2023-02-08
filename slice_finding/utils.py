class RankedList:
    """
    A helper class that maintains a list of arbitrary objects with single
    numerical scores.
    """
    def __init__(self, k, initial_items=None):
        """
        :param k: The number of items to save in the ranked list.
        :param initial_items: If provided, a list of tuples of (item, score)
            that should populate the ranked list.
        """
        self.k = k
        if initial_items is not None:
            self.items = [x[0] for x in initial_items]
            self.scores = [x[1] for x in initial_items]
        else:
            self.items = []
            self.scores = []
        
    def add(self, item, score):
        added = False
        for i, comp_score in enumerate(self.scores):
            if score > comp_score:
                self.items.insert(i, item)
                self.scores.insert(i, score)
                added = True
                break
        if not added and len(self.items) < self.k: 
            self.items.append(item)
            self.scores.append(score)
