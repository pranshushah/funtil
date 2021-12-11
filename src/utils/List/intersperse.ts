import { for_each } from './for_each';
import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';

/**
 * @description creates a new array that adds separator between the elements , also works in partial form.
 * @returns new array that has separator between every element.
 * @category List
 * @example
 * ```typescript
 * F.intersperse(" ",["pranshu","tikendrakumar","shah"]) // ["pranshu"," ","tikendrakumar"," ","shah"]
 * ```
 */
export function intersperse<T>(x: T, xs: readonly T[]): T[];
export function intersperse<T>(x: Placeholder, xs: readonly T[]): (x: T) => T[];
export function intersperse<T>(x: T): (xs: readonly T[]) => T[];
export function intersperse<T>(x: T, xs?: readonly T[]) {
  return curried2(
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
