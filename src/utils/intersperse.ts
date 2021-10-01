import { for_each } from './for_each';
import { partial2 } from './internals/partial2';

/**
 * @description creates a new array that adds separator between the elements , also works in partial form.
 * @returns new array that has separator between every element.
 * @category List
 * @example
 * F.intersperse(" ",["pranshu","tikendrakumar","shah"]) // ["pranshu"," ","tikendrakumar"," ","shah"]
 */
export function intersperse<T>(x: T, xs: readonly T[]): T[];
export function intersperse<T>(x: T): (xs: readonly T[]) => T[];
export function intersperse<T>(x: T, xs?: readonly T[]) {
  return partial2(
    function main(x: T, xs: readonly T[]) {
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
    },
    x,
    xs
  );
}
