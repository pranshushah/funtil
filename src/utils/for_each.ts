import { T } from 'ts-toolbelt';

export function for_each<T>(
  fn: (arg: T, index: number, arr: readonly T[]) => void,
  arr: readonly T[]
): T[] {
  for (let index = 0; index < arr.length; index++) {
    fn(arr[index], index, arr);
  }
  return arr as T[];
}
