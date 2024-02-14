import type {
  SliceFeature,
  SliceFeatureAnd,
  SliceFeatureBase,
  SliceFeatureNegation,
} from './slice.type';
import { featureNeedsParentheses } from './utils';
import parser from './peg_slice_parser';

export const BaseFeatureToken = 'ANY';

export function featureToString(
  feature: SliceFeatureBase,
  needsParentheses: boolean = false,
  positiveOnly: boolean = false
): string {
  if (feature.type == 'base') {
    return BaseFeatureToken;
  } else if (feature.type == 'feature') {
    let atomicFeature = feature as SliceFeature;
    if (positiveOnly) return `"${atomicFeature.col}"`;
    let base = `"${atomicFeature.col}" = `;
    if (atomicFeature.vals.length > 1)
      base += `[${atomicFeature.vals.map((v) => '"' + v + '"').join(', ')}]`;
    else base += '"' + atomicFeature.vals[0] + '"';
    return base;
  } else if (feature.type == 'negation') {
    let negationFeature = feature as SliceFeatureNegation;
    return (
      '!' +
      featureToString(
        negationFeature.feature,
        featureNeedsParentheses(negationFeature.feature, feature),
        positiveOnly
      )
    );
  } else if (feature.type == 'and' || feature.type == 'or') {
    let conjFeature = feature as SliceFeatureAnd;
    let base = needsParentheses ? '(' : '';
    base += featureToString(
      conjFeature.lhs,
      featureNeedsParentheses(conjFeature.lhs, feature),
      positiveOnly
    );
    base += feature.type == 'and' ? ' & ' : ' | ';
    base += featureToString(
      conjFeature.rhs,
      featureNeedsParentheses(conjFeature.rhs, feature),
      positiveOnly
    );
    base += needsParentheses ? ')' : '';
    return base;
  }
  return '';
}

// throws an ERROR if the feature is not valid
export function validateFeatureForTable(
  feature: SliceFeatureBase,
  allowedValues: any
): boolean {
  if (feature.type == 'base') return true;
  if (feature.type == 'feature') {
    let f = feature as SliceFeature;
    if (!allowedValues.hasOwnProperty(f.col))
      throw new Error(`Unexpected feature column '${f.col}'`);
    let possibleVals = allowedValues[f.col];
    f.vals.forEach((v) => {
      if (!possibleVals.includes(v))
        throw new Error(`Feature column '${f.col}' cannot take value '${v}'`);
    });
    return true;
  } else if (feature.type == 'negation')
    return validateFeatureForTable(feature.feature, allowedValues);
  else if (feature.type == 'and' || feature.type == 'or')
    return (
      validateFeatureForTable(feature.lhs, allowedValues) &&
      validateFeatureForTable(feature.rhs, allowedValues)
    );
  return true;
}

export function parseFeature(
  featureText: string,
  allowedValues: any
): SliceFeatureBase {
  // validate that the feature text parses AND defines a valid slice in terms of
  // the known features
  let parsedResult = parser.parse(featureText);
  if (!!allowedValues && !validateFeatureForTable(parsedResult, allowedValues))
    return null;
  return parsedResult;
}
