import { partial2 } from './internals/partial2';
export function any<T>(
  predicate: (arg: T) => boolean,
  arr: readonly T[]
): boolean;

export function any<T>(
  predicate: (arg: T) => boolean
): (arr: readonly T[]) => boolean;

export function any<T>(predicate: (arg: T) => boolean, arr?: readonly T[]) {
  return partial2(
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
