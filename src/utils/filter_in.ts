import { filter } from './filter';
export function filter_in<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr: readonly T[]
) {
  return filter(predicate_fn, arr);
}
