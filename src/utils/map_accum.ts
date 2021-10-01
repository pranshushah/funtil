import { clone } from './clone';
import { partial3 } from './internals/partial3';
/**
 * @description The mapAccum function behaves like a combination of map and reduce; it applies a function to each element of a list, passing an accumulating parameter from left to right, and returning a final value of this accumulator together with the new list.also works with partial form.
 * @returns tuple containing accumulator, and new mapped array.
 * @category List
 * @example
 * function adder(acc: string, x: string): [string, number] {
    return [acc + x, parseInt(acc) + parseInt(x)];
  }
  F.map_accum(adder, '0', ['1', '2', '3', '4']); // ['01234',[1,3,15,127]]
 */
export function map_accum<T1, T2, R>(
  fn: (acc: T1, val: T2) => [T1, R],
  acc: T1,
  list: readonly T2[]
): [T1, R[]];

export function map_accum<T1, T2, R>(
  fn: (acc: T1, val: T2) => [T1, R],
  acc: T1
): (list: readonly T2[]) => [T1, R[]];

export function map_accum<T1, T2, R>(
  fn: (acc: T1, val: T2) => [T1, R]
): {
  (acc: T1, list: readonly T2[]): [T1, R[]];
  (acc: T1): (list: readonly T2[]) => [T1, R[]];
};

export function map_accum<T1, T2, R>(
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
      for (let index = 0; index < list.length; index++) {
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
