export function none<T>(fn: (arg: T) => boolean, arr: T[]) {
  for (let index = 0; index < arr.length; index++) {
    if (fn(arr[index])) {
      return false;
    }
  }
  return true;
}
