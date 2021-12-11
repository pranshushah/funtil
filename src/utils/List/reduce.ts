import { partial3 } from '../internals/curried3';

/**
 * @description same as [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce](Array.prototype.reduce()) but does not skip deleted or unassigned indices (sparse arrays); also works in partial form.
 * @returns accumulator
 * @category List
 * @example
 * ```typescript
 * F.reduce(F.add,0,[1,2,3]) // 6
 * ```
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
