export function reduce_while<T, R>(
  predicate_fn: (ac: R, element: T) => boolean,
  reducer_fn: (ac: R, element: T, index?: number, arr?: readonly T[]) => R,
  initialValue: R,
  arr: readonly T[]
) {
  let acc = initialValue;
  for (let index = 0; index < arr.length; index++) {
    if (predicate_fn(acc, arr[index])) {
      acc = reducer_fn(acc, arr[index], index, arr);
    }
  }
  return acc;
}
