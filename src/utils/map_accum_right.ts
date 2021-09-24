import { clone } from './clone';
import { partial3 } from './internals/partial3';
/**
 * @description he mapAccumRight function behaves like a combination of map and reduce; it applies a function to each element of a list, passing an accumulating parameter from right to left, and returns a tuple containing a final value of this accumulator together with the new list.also works with partial form
 * @returns tuple containing accumulator, and new mapped array.
 * @category List
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
      let acc_copy = clone(acc);
      let mapped: R;
      for (let index = list.length - 1; index >= 0; index--) {
        [acc_copy, mapped] = fn(acc_copy, list[index]);
        result[index] = mapped;
      }
      return [acc_copy, result] as [T1, R[]];
    },
    fn,
    acc,
    list
  );
}
