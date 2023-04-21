export interface Histogram {
  [key: string]: number;
}

export interface SliceMetric {
  type: string;
  mean?: number;
  share?: number;
  count?: number;
  hist?: Histogram;
  counts?: { [key: string]: number };
}

export interface Slice {
  stringRep?: string;
  featureValues: any;
  scoreValues: any;
  isEmpty: boolean;
  metrics?: { [key: string]: SliceMetric };
}
