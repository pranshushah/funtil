import { curried2 } from '../internals/curried2';
import { __ } from '../constant/constant';
import { Placeholder } from '../types';
/**
 * @description takes predication function and array and passes all element one by one to predication function if it returns true for any,element function returns true it otherwise returns false. also works in partial form
 * @returns true if predication function returns true for any element in array or false
 * @category List
 * @example
 * ```typescript
 * function isItLongString(str:string){
 *  return str.length > 10;
 * }
 * F.any(isItLongString,["pranshu","mit","pranshu shah"]) // true;
 * F.any(isItLongString,["pranshu","mit","sanket"]) // false;
 * ```
 */

export function any<T>(
  x: Placeholder,
  arr: readonly T[]
): (predicate: (arg: T) => boolean) => boolean;

export function any<T>(
  predicate: (arg: T) => boolean,
  arr: readonly T[]
): boolean;

export function any<T>(
  predicate: (arg: T) => boolean
): (arr: readonly T[]) => boolean;

export function any<T>(
  predicate: ((arg: T) => boolean) | Placeholder,
  arr?: readonly T[]
) {
  return curried2(
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
