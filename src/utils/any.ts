import { partial2 } from './internals/partial2';

/**
 * @description takes predication function and array and passes all element one by one to predication function if it returns true for any element function returns true otherwise returns false. also works in partial form
 * @returns true if predication function returns true for any element in array or false
 * @category List
 */
export function any<T>(
  predicate: (arg: T) => boolean,
  arr: readonly T[]
): boolean;

export function any<T>(
  predicate: (arg: T) => boolean
): (arr: readonly T[]) => boolean;

export function any<T>(predicate: (arg: T) => boolean, arr?: readonly T[]) {
  return partial2(
    function main_any(predicate: (arg: T) => boolean, arr: readonly T[]) {
      let ret_bool = false;
      for (let index = 0; index < arr.length; index++) {
        if (predicate(arr[index])) {
          ret_bool = true;
          break;
        }
      }
      return ret_bool;
    },
    predicate,
    arr
  );
}
