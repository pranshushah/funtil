import { partial2 } from './internals/partial2';

export function for_each<T>(
  fn: (arg: T, index: number, arr: readonly T[]) => void,
  arr?: readonly T[]
) {
  return partial2(
    function main_for_each(
      fn: (arg: T, index: number, arr: readonly T[]) => void,
      arr: readonly T[]
    ) {
      for (let index = 0; index < arr.length; index++) {
        fn(arr[index], index, arr);
      }
      return arr as T[];
    },
    fn,
    arr
  );
}
