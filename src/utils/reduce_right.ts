import { partial3 } from './internals/partial3';

/**
 * @description same as F.reduce function but reduces the array right-left; also works in partial form.
 * @category List
 */
export function reduce_right<T, R>(
  reducer_fn: (acc: R, element: T, index?: number, arr?: readonly T[]) => R,
  initialValue: R,
  arr: readonly T[]
): R;

export function reduce_right<T, R>(
  reducer_fn: (acc: R, element: T, index?: number, arr?: readonly T[]) => R,
  initialValue: R
): (arr: readonly T[]) => R;

export function reduce_right<T, R>(
  reducer_fn: (acc: R, element: T, index?: number, arr?: readonly T[]) => R
): {
  (initialValue: R, arr: readonly T[]): R;
  (initialValue: R): (arr: readonly T[]) => R;
};

export function reduce_right<T, R>(
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
      for (let index = arr.length - 1; index >= 0; index--) {
        acc = reducer_fn(acc, arr[index], index, arr);
      }
      return acc;
    },
    reducer_fn,
    initialValue,
    arr
  );
}
