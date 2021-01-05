export function find_index<T>(predicate_fn: (arg: T) => boolean, arr: T[]) {
  for (let index = 0; index < arr.length; index++) {
    if (predicate_fn(arr[index])) {
      return index;
    }
  }
  return -1;
}
