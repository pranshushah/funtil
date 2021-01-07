import { partial2 } from './internals/partial2';

export function find<T>(predicate_fn: (arg: T) => boolean, arr?: readonly T[]) {
  return partial2(
    function main_find(predicate_fn: (arg: T) => boolean, arr: readonly T[]) {
      let return_element: T | undefined;
      for (let index = 0; index < arr.length; index++) {
        if (predicate_fn(arr[index])) {
          return_element = arr[index];
        }
      }
      return return_element;
    },
    predicate_fn,
    arr
  );
}
