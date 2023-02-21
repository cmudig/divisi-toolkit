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
  featureValues: any;
  scoreValues: any;
  metrics?: { [key: string]: SliceMetric };
}
