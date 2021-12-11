import { curried2 } from '../internals/curried2';
import produce from 'immer';
/**
 * @description takes array and value and appends that value into the array also works in partial form
 * @returns new copy of array with given value at end
 * @category List
 * @example
 * ```typescript
 * let arr = [1,2,3];
 * arr = append(arr,4); // [1,2,3,4]
 * ```
 */
export function append<T>(arr: T[], val: T): T[];
export function append<T>(arr: T[]): (val: T) => T[];

export function append<T>(arr: T[], val?: T) {
  return curried2(
    function main_append(arr: T[], val: T) {
      return produce(arr, (draft: T[]) => {
        draft.push(val);
      });
    },
    arr,
    val
  );
}
