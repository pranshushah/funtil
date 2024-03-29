import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';
/**
 * @description returns the last index for which predication function returns true. returns -1 if predication function does not return true for any value in array,also works with partial argument.
 * @category List
 * @example
 * ```typescript
 * function isLongString(x:string){
 *    return x.length > 10;
 * }
 * F.find_last_index(isLongString,["mit","sanket","pranshu shah","nisarg","mit nilesh desai"]) // 4
 * F.find_last_index(isLongString,["mit","sanket","pranshu","nisarg"]) // -1
 * ```
 */

export function find_last_index<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr: readonly T[]
): number;

export function find_last_index<T>(
  x: Placeholder,
  arr: readonly T[]
): (
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean
) => number;

export function find_last_index<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean
): (arr: readonly T[]) => number;

export function find_last_index<T>(
  predicate_fn:
    | ((arg: T, index: number, arr: readonly T[]) => boolean)
    | Placeholder,
  arr?: readonly T[]
) {
  return curried2(
    function main_find_last(
      predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
      arr: readonly T[]
    ) {
      let last_index = -1;
      for (let index = 0; index < arr.length; index++) {
        if (predicate_fn(arr[index], index, arr)) {
          last_index = index;
        }
      }
      return last_index;
    },
    predicate_fn,
    arr
  );
}
