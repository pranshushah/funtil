import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';

/**
 * @description returns an array of all elements for which predicate function returns true,also works with partial argument.
 * @alias filter_in
 * @category List
 * @example
 * ```typescript
 * function isOdd(x:number){
 *    return x % 2 === 1;
 * }
 * F.filter(isOdd,[1,2,3,4,5,6,7]) // [1,3,5,7]
 * ```
 */
export function filter<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr: readonly T[]
): T[];

export function filter<T>(
  x: Placeholder,
  arr: readonly T[]
): (predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean) => T[];

export function filter<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean
): (arr: readonly T[]) => T[];

export function filter<T>(
  predicate_fn:
    | ((arg: T, index: number, arr: readonly T[]) => boolean)
    | Placeholder,
  arr?: readonly T[]
) {
  return curried2(
    function main_filter(
      predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
      arr: readonly T[]
    ) {
      let newList: T[] = [];
      for (let [index, val] of arr.entries()) {
        if (predicate_fn(val, index, arr)) {
          newList.push(val);
        }
      }
      return newList;
    },
    predicate_fn,
    arr
  );
}
