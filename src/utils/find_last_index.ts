export function find_last<T>(predicate_fn: (arg: T) => boolean, arr: T[]) {
  let last_index = -1;
  for (let index = 0; index < arr.length; index++) {
    if (predicate_fn(arr[index])) {
      last_index = index;
    }
  }
  return last_index;
}
