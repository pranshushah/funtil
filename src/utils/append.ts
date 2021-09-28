import { concat } from './concat';
import { partial2 } from './internals/partial2';
/**
 * @description takes array and value and appends that value into the array also works in partial form
 * @returns new copy of array with given value at end
 * @category List
 * @example
 * let arr = [1,2,3];
 * arr = append(arr,4); // [1,2,3,4]
 */
export function append<T>(arr: T[], val: T): T[];
export function append<T>(arr: T[]): (val: T) => T[];

export function append<T>(arr: T[], val?: T) {
  return partial2(
    function main_append(arr: T[], val: T) {
      return concat(arr, [val]);
    },
    arr,
    val
  );
}
