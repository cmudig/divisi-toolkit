import type { Slice } from './slice.type';

export function sliceToString(slice: Slice): string {
  let featureKeys = Object.keys(slice.featureValues);
  featureKeys.sort();
  return featureKeys.map((k) => `${k}: ${slice.featureValues[k]}`).join(',');
}
