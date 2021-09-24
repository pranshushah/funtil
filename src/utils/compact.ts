import { for_each } from './for_each';

/**
 * @description takes an array and removes the falsy values like ("",null,undefined) returns the array.
 * @returns it returns new copy of array without mutating original array
 * @category List
 */

export function compact<T>(arr: readonly T[]) {
  let result: T[] = [];
  for_each(function cb(val: T) {
    if (val) {
      result.push(val);
    }
  }, arr);
  return result;
}
