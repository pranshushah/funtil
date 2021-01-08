import { filter } from './filter';
import { partial2 } from './internals/partial2';

export function filter_in<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr: readonly T[]
): T[];

export function filter_in<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean
): (arr: readonly T[]) => T[];

export function filter_in<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr?: readonly T[]
) {
  return partial2(
    function main_filter_in(
      predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
      arr: readonly T[]
    ) {
      return filter(predicate_fn, arr);
    },
    predicate_fn,
    arr
  );
}
