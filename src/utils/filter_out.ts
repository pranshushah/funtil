import { filter } from './filter';
import { complement } from './complement';
import { partial2 } from './internals/partial2';
export function filter_out<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr?: readonly T[]
) {
  return partial2(
    function main_filter_out(
      predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
      arr: readonly T[]
    ) {
      return filter(complement(predicate_fn), arr);
    },
    predicate_fn,
    arr
  );
}
