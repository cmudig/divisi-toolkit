import type { Slice } from './slice.type';

export function sliceToString(slice: Slice): string {
  let featureKeys = Object.keys(slice.featureValues);
  featureKeys.sort();
  return featureKeys.map((k) => `${k}: ${slice.featureValues[k]}`).join(',');
}

export let areSetsEqual = <T>(a: Set<T>, b: Set<T>): boolean =>
  a.size === b.size && [...a].every((value) => b.has(value));

export function areObjectsEqual(obj1: any, obj2: any): boolean {
  return (
    Object.entries(obj1).every((e) => obj2[e[0]] == e[1]) &&
    Object.entries(obj2).every((e) => obj1[e[0]] == e[1])
  );
}

export function cumulativeSum(arr: Array<number>): Array<number> {
  return arr.map(
    (
      (sum) => (value) =>
        (sum += value)
    )(0)
  );
}
