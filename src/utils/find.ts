export function find<T>(predicate_fn: (arg: T) => boolean, arr: T[]) {
  // using here var because it will throw error with let due to TDZ so we can take advantage of hositing of var
  var return_element: T | undefined;
  for (let index = 0; index < arr.length; index++) {
    if (predicate_fn(arr[index])) {
      return_element = arr[index];
    }
  }
  return return_element;
}
