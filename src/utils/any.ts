export function any<T>(
  predicate: (arg: T) => boolean,
  arr: readonly T[]
): boolean {
  let ret_bool = false;
  for (let index = 0; index < arr.length; index++) {
    if (predicate(arr[index])) {
      ret_bool = true;
      break;
    }
  }
  return ret_bool;
}
