import { partial3 } from './internals/partial3';
/**
 * @description he mapAccumRight function behaves like a combination of map and reduce; it applies a function to each element of a list, passing an accumulating parameter from right to left, and returns a tuple containing a final value of this accumulator together with the new list.also works with partial form
 * @returns tuple containing accumulator, and new mapped array.
 */
export function map_accum_right<T1, T2, R>(
  fn: (acc: T1, val: T2) => [T1, R],
  acc: T1,
  list: readonly T2[]
): [T1, R[]];

export function map_accum_right<T1, T2, R>(
  fn: (acc: T1, val: T2) => [T1, R],
  acc: T1
): (list: readonly T2[]) => [T1, R[]];

export function map_accum_right<T1, T2, R>(
  fn: (acc: T1, val: T2) => [T1, R]
): {
  (acc: T1, list: readonly T2[]): [T1, R[]];
  (acc: T1): (list: readonly T2[]) => [T1, R[]];
};

export function map_accum_right<T1, T2, R>(
  fn: (acc: T1, val: T2) => [T1, R],
  acc?: T1,
  list?: readonly T2[]
) {
  return partial3(
    function main(
      fn: (acc: T1, val: T2) => [T1, R],
      acc: T1,
      list: readonly T2[]
    ) {
      let result: R[] = [];
      let tuple: [T1, R] = fn(acc, list[list.length - 1]);
      result[list.length - 1] = tuple[1];
      for (let index = list.length - 2; index >= 0; index--) {
        tuple = fn(tuple[0], list[index]);
        result[index] = tuple[1];
      }
      return [tuple[0], result] as [T1, R[]];
    },
    fn,
    acc,
    list
  );
}
