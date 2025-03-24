export enum RuleFilterType {
  exclude = 'exclude',
  include = 'include',
}

export enum RuleFilterCombination {
  or = 'or',
  and = 'and',
}

export type RuleFilter = {
  type: 'combination' | 'constraint';
  combination?: RuleFilterCombination;
  logic?: RuleFilterType;
  features?: string[];
  values?: any[];
  lhs?: RuleFilter;
  rhs?: RuleFilter;
};
