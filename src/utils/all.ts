import { partial2 } from './internals/partial2';

export function all<T>(
  predicate: (arg: T) => boolean,
  arr: readonly T[]
): boolean;
export function all<T>(
  predicate: (arg: T) => boolean
): (arr: readonly T[]) => boolean;

export function all<T>(predicate: (arg: T) => boolean, arr?: readonly T[]) {
  return partial2(
    function main_all(predicate: (arg: T) => boolean, arr: readonly T[]) {
      let ret_bool = true;
      for (let index = 0; index < arr.length; index++) {
        if (!predicate(arr[index])) {
          ret_bool = false;
          break;
        }
      }
      return ret_bool;
    },
    predicate,
    arr
  );
}
