import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';

/**
 * @description returns the last element for which predication function returns true. returns undefined if predication function does not return true for any value in array, also works with partial argument.
 * @category List
 * @example
 * function isLongString(x:string){
 *    return x.length > 10;
 * }
 * F.find(isLongString,["mit","sanket","pranshu shah","nisarg","mit nilesh desai"]) // "pranshu shah"
 * F.find(isLongString,["mit","sanket","pranshu","nisarg"]) // undefined
 */

export function find<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr: readonly T[]
): T | undefined;

export function find<T>(
  x: Placeholder,
  arr: readonly T[]
): (
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean
) => T | undefined;

export function find<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean
): (arr: readonly T[]) => T | undefined;

export function find<T>(
  predicate_fn:
    | ((arg: T, index: number, arr: readonly T[]) => boolean)
    | Placeholder,
  arr?: readonly T[]
) {
  return curried2(
    function main_find(
      predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
      arr: readonly T[]
    ) {
      let return_element: T | undefined;
      for (let index = 0; index < arr.length; index++) {
        if (predicate_fn(arr[index], index, arr)) {
          return_element = arr[index];
        }
      }
      return return_element;
    },
    predicate_fn,
    arr
  );
}
