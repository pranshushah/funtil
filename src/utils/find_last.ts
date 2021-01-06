export function find_last<T>(predicate_fn: (arg: T) => boolean, arr: T[]) {
  let return_element: T | undefined;
  for (let index = 0; index < arr.length; index++) {
    if (predicate_fn(arr[index])) {
      return_element = arr[index];
    }
  }
  return return_element;
}
