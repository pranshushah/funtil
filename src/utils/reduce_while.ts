/**
 * @description Like reduce, reduceWhile returns a single item by iterating through the list, successively calling the iterator function. reduceWhile also takes a predicate that is evaluated before each step. If the predicate returns false, it "short-circuits" the iteration and returns the current value of the accumulator.
 */
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
