import { partial3 } from './internals/partial3';

/**
 * @description this function takes index,function and array as an argument.then passes the element at given index to the function and return value is set as new value at given index in array.
 * @returns new copy of array with function applied at given index
 * @category List
 * @example
 *  F.adjust(3,F.negate,[1,2,3,4]) // => [1,2,3,-4]
 *
 *  const arrayGetter = F.adjust(3,F.negate);
 *  arrayGetter([1,2])  // => [1,-2]
 *
 *  const functionAndArrayGetter = F.adjust(-1);
 *  functionAndArrayGetter(F.negate,[1,2,3]); // => [1,2,-3]
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
      ret_array[main_index] = fn(ret_array[main_index]);
      return ret_array;
    },
    index,
    fn,
    arr
  );
}
