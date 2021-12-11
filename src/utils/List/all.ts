import { curried2 } from '../internals/curried2';
import { __ } from '../constant/constant';
import { Placeholder } from '../types';
/**
 * @description takes predication function and array and passes all element one by one to predication function if it returns true for all elements function returns true otherwise it returns false. also works in partial form
 * @returns true if predication function returns true for all elements in array otherwise false
 * @category List
 * @example
 * ```typescript
 *  F.all(F.lt(100), [1, 2, 3, 3, 56, -112, -32])  // =>  true
 *  let arrayGetter = F.all(F.lt(100));
 *  arrayGetter([1, 2, 3, 3, 56, 112, -32]) // false
 * ```
 */

export function all<T>(
  predicate: Placeholder,
  arr: readonly T[]
): (predicate: (arg: T) => boolean) => boolean;
export function all<T>(
  predicate: (arg: T) => boolean,
  arr: readonly T[]
): boolean;
export function all<T>(
  predicate: (arg: T) => boolean
): (arr: readonly T[]) => boolean;

export function all<T>(
  predicate: ((arg: T) => boolean) | Placeholder,
  arr?: readonly T[]
) {
  return curried2(
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
