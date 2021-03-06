import { partial3 } from './internals/partial3';
/**
 * @description The mapAccum function behaves like a combination of map and reduce; it applies a function to each element of a list, passing an accumulating parameter from left to right, and returning a final value of this accumulator together with the new list.also works with partial form.
 * @returns tuple containing accumulator, and new mapped array.
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
      let tuple: [T1, R] = fn(acc, list[0]);
      result.push(tuple[1]);
      for (let index = 1; index < list.length; index++) {
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
