import { for_each } from './for_each';

export function intersperse<T>(x: T, xs: readonly T[]): T[] {
  let result: T[] = [];

  function adding_x(val: T, index: number, original_arr: readonly T[]) {
    if (index === original_arr.length - 1) {
      result.push(val);
    } else {
      result.push(val, x);
    }
  }

  for_each(adding_x, xs);
  return result;
}
