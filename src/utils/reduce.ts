import { partial3 } from './internals/partial3';

/**
 * @description same as {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce| Array.reduce()} but does not skip deleted or unassigned indices (sparse arrays); also works in partial form.
 * @returns accumulator
 */
export function reduce<T, R>(
  reducer_fn: (acc: R, element: T, index?: number, arr?: readonly T[]) => R,
  initialValue: R,
  arr: readonly T[]
): R;

export function reduce<T, R>(
  reducer_fn: (acc: R, element: T, index?: number, arr?: readonly T[]) => R,
  initialValue: R
): (arr: readonly T[]) => R;

export function reduce<T, R>(
  reducer_fn: (acc: R, element: T, index?: number, arr?: readonly T[]) => R
): {
  (initialValue: R): (arr: readonly T[]) => R;
  (initialValue: R, arr: readonly T[]): R;
};

export function reduce<T, R>(
  reducer_fn: (acc: R, element: T, index?: number, arr?: readonly T[]) => R,
  initialValue?: R,
  arr?: readonly T[]
) {
  return partial3(
    function main(
      reducer_fn: (acc: R, element: T, index?: number, arr?: readonly T[]) => R,
      initialValue: R,
      arr: readonly T[]
    ) {
      let acc = initialValue;
      for (let index = 0; index < arr.length; index++) {
        acc = reducer_fn(acc, arr[index], index, arr);
      }
      return acc;
    },
    reducer_fn,
    initialValue,
    arr
  );
}
