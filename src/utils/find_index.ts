import { partial2 } from './internals/partial2';

export function find_index<T>(
  predicate_fn: (arg: T) => boolean,
  arr?: readonly T[]
) {
  return partial2(
    function main_find_index(
      predicate_fn: (arg: T) => boolean,
      arr: readonly T[]
    ) {
      for (let index = 0; index < arr.length; index++) {
        if (predicate_fn(arr[index])) {
          return index;
        }
      }
      return -1;
    },
    predicate_fn,
    arr
  );
}
