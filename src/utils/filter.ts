import { partial2 } from './internals/partial2';

/**
 * @description returns an array of all elements for which predicate function returns true,also works with partial argument.
 * @alias filter_in
 * @category List
 */
export function filter<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr: readonly T[]
): T[];

export function filter<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean
): (arr: readonly T[]) => T[];

export function filter<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr?: readonly T[]
) {
  return partial2(
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
