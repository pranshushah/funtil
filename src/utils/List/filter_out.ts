import { filter } from './filter';
import { complement } from '../Logic/complement';
import { partial2 } from '../internals/partial2';

/**
 * @description returns an array of all elements for which predicate function returns false,also works with partial argument.
 * @category List
 * @example
 * ```typescript
 * function isOdd(x:number){
 *    return x % 2 === 1;
 * }
 * F.filter_out(isOdd,[1,2,3,4,5,6,7]) // [2,4,6]
 * ```
 */
export function filter_out<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr: readonly T[]
): T[];

export function filter_out<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean
): (arr: readonly T[]) => T[];

export function filter_out<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr?: readonly T[]
) {
  return partial2(
    function main_filter_out(
      predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
      arr: readonly T[]
    ) {
      return filter(complement(predicate_fn), arr);
    },
    predicate_fn,
    arr
  );
}
