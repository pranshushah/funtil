export function reduce<T, R>(
  reducer_fn: (acc: R, element: T, index?: number, arr?: readonly T[]) => R,
  arr: readonly T[],
  initialValue: R
) {
  let acc = initialValue;
  for (let index = 0; index < arr.length; index++) {
    acc = reducer_fn(acc, arr[index], index, arr);
  }
  return acc;
}
