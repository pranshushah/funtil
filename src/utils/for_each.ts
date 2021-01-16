import { partial2 } from './internals/partial2';

/**
 * @description takes a function and an array, and calls that function on every element of array and returns original array.
 */
export function for_each<T>(
  fn: (arg: T, index: number, arr: readonly T[]) => void,
  arr: readonly T[]
): T[];

export function for_each<T>(
  fn: (arg: T, index: number, arr: readonly T[]) => void
): (arr: readonly T[]) => T[];

export function for_each<T>(
  fn: (arg: T, index: number, arr: readonly T[]) => void,
  arr?: readonly T[]
) {
  return partial2(
    function main_for_each(
      fn: (arg: T, index: number, arr: readonly T[]) => void,
      arr: readonly T[]
    ) {
      let return_arr = arr.slice();
      for (let index = 0; index < arr.length; index++) {
        fn(arr[index], index, arr);
      }
      return return_arr;
    },
    fn,
    arr
  );
}
