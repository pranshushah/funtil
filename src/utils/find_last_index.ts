import { partial2 } from './internals/partial2';

export function find_last<T>(
  predicate_fn: (arg: T) => boolean,
  arr?: readonly T[]
) {
  return partial2(
    function main_find_last(
      predicate_fn: (arg: T) => boolean,
      arr: readonly T[]
    ) {
      let last_index = -1;
      for (let index = 0; index < arr.length; index++) {
        if (predicate_fn(arr[index])) {
          last_index = index;
        }
      }
      return last_index;
    },
    predicate_fn,
    arr
  );
}
