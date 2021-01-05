export function all<T>(
  predicate: (arg: T) => boolean,
  arr: readonly T[]
): boolean {
  let ret_bool = true;
  for (let index = 0; index < arr.length; index++) {
    if (!predicate(arr[index])) {
      ret_bool = false;
      break;
    }
  }
  return ret_bool;
}
