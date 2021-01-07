export function reduce_right<T, R>(
  reducer_fn: (acc: R, element: T, index?: number, arr?: readonly T[]) => R,
  initialValue: R,
  arr: readonly T[]
) {
  let acc = initialValue;
  for (let index = arr.length - 1; index >= 0; index--) {
    acc = reducer_fn(acc, arr[index], index, arr);
  }
  return acc;
}
