import { partial2 } from './internals/partial2';

/**
 * @description returns the first index for which predication function returns true. returns -1 if predication function does not return true for any value in array,also works with partial argument.
 */

export function find_index<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr: readonly T[]
): number;

export function find_index<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean
): (arr: readonly T[]) => number;

export function find_index<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr?: readonly T[]
) {
  return partial2(
    function main_find_index(
      predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
      arr: readonly T[]
    ) {
      for (let index = 0; index < arr.length; index++) {
        if (predicate_fn(arr[index], index, arr)) {
          return index;
        }
      }
      return -1;
    },
    predicate_fn,
    arr
  );
}
