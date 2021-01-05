export function for_each<T>(fn: (arg: T) => void, arr: readonly T[]): T[] {
  for (let index = 0; index < arr.length; index++) {
    fn(arr[index]);
  }
  return arr as T[];
}
