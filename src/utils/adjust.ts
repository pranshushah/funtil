import { partial3 } from './internals/partial3';

/**
 * @description this function minupulates element of array at given index and it also take arguments in partial form.
 * @param index the index that you want to minupulate
 * @param fn function that is called with element at given index
 * @param arr array you want to minupulate to
 * @returns new copy of array with function applied at given index
 */
export function adjust<T>(
  index: number,
  fn: (arg: T) => T,
  arr: readonly T[]
): T[];

export function adjust<T>(
  index: number,
  fn: (arg: T) => T
): (arr: readonly T[]) => T[];

export function adjust(
  index: number
): {
  <T>(fn: (arg: T) => T, arr: readonly T[]): T[];
  <T>(fn: (arg: T) => T): (arr: readonly T[]) => T[];
};
export function adjust<T>(
  index: number,
  fn?: (arg: T) => T,
  arr?: readonly T[]
) {
  return partial3(
    function main(index: number, fn: (arg: T) => T, arr: readonly T[]) {
      const ret_array = arr.slice(0, arr.length);
      const main_index =
        index >= arr.length || index < 0 ? arr.length - 1 : index;

      for (let i = 0; i < arr.length; i++) {
        if (i === main_index) {
          ret_array[i] = fn(ret_array[i]);
          break;
        }
      }
      return ret_array;
    },
    index,
    fn,
    arr
  );
}
