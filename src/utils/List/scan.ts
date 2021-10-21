import { partial3 } from '../internals/partial3';
/**
 * @description same as ```F.reducer``` but returns acc at every point; also works with partial form.
 * @category List
 * @example
 * ```typescript
 * function stringCombiner(acc: string, element: string) {
 *    return acc + element;
 * }
 * F.scan(stringCombiner, '', ['0', '1', '2', '3']); // ['','0','01','012','0123']
 * ```
 */
export function scan<T, R>(
  reducer_fn: (acc: R, element: T, index?: number, arr?: readonly T[]) => R,
  initialValue: R,
  arr: readonly T[]
): R[];

export function scan<T, R>(
  reducer_fn: (acc: R, element: T, index?: number, arr?: readonly T[]) => R
): {
  (initialValue: R, arr: readonly T[]): R[];
  (initialValue: R): (arr: readonly T[]) => R[];
};

export function scan<T, R>(
  reducer_fn: (acc: R, element: T, index?: number, arr?: readonly T[]) => R,
  initialValue: R
): (arr: readonly T[]) => R[];

export function scan<T, R>(
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
      let acc: R[] = [initialValue];
      for (let index = 0; index < arr.length; index++) {
        acc[index + 1] = reducer_fn(acc[index], arr[index], index, arr);
      }
      return acc;
    },
    reducer_fn,
    initialValue,
    arr
  );
}
