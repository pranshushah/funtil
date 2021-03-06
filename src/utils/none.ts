import { partial2 } from './internals/partial2';

/**
 * @description returns true if predication function returns false for all the value of array, otherwise it returns false; also works with partial form.
 */
export function none<T>(fn: (arg: T) => boolean, arr: T[]): boolean;
export function none<T>(fn: (arg: T) => boolean): (arr: T[]) => boolean;

export function none<T>(fn: (arg: T) => boolean, arr?: T[]) {
  return partial2(
    function main(fn: (arg: T) => boolean, arr: T[]) {
      for (let index = 0; index < arr.length; index++) {
        if (fn(arr[index])) {
          return false;
        }
      }
      return true;
    },
    fn,
    arr
  );
}
