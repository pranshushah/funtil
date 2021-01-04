import { filter } from './filter';
import { complement } from './complement';
export function filter_out<T>(
  predicate_fn: (arg: T, index?: number, arr?: T[]) => boolean,
  arr: T[]
) {
  return filter(complement(predicate_fn), arr);
}
