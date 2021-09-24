import { partial2 } from './internals/partial2';

/**
 * @description takes predication function and array and passes all element one by one to predication function if it returns true for all elements function returns true otherwise it returns false. also works in partial form
 * @returns true if predication function returns true for all elements in array otherwise false
 * @category List
 */

export function all<T>(
  predicate: (arg: T) => boolean,
  arr: readonly T[]
): boolean;
export function all<T>(
  predicate: (arg: T) => boolean
): (arr: readonly T[]) => boolean;

export function all<T>(predicate: (arg: T) => boolean, arr?: readonly T[]) {
  return partial2(
    function main_all(predicate: (arg: T) => boolean, arr: readonly T[]) {
      let ret_bool = true;
      for (let index = 0; index < arr.length; index++) {
        if (!predicate(arr[index])) {
          ret_bool = false;
          break;
        }
      }
      return ret_bool;
    },
    predicate,
    arr
  );
}
