export function filter<T>(
  predicate_fn: (arg: T, index: number, arr: readonly T[]) => boolean,
  arr: readonly T[]
) {
  let newList: T[] = [];
  for (let [index, val] of arr.entries()) {
    if (predicate_fn(val, index, arr)) {
      newList.push(val);
    }
  }
  return newList;
}
