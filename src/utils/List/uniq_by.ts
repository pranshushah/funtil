import { for_each } from './for_each';
import { includes } from './includes';
import { curried2 } from '../internals/curried2';

/**
 * @description takes a function and an array. returns an array that contains the return value of the function that takes element of an array as an argument.
 * @category List
 * @example
 * ```typescript
 *type Name = {
  id: string;
  name: string;
  };
 *function nameGetter(x: Name) {
 *  return x.name;
 * }
 * F.uniq_by(nameGetter, [
    { id: '1', name: 'pranshu' },
    { id: '1', name: 'mit' },
    { id: '1', name: 'pranshu' },
    { id: '1', name: 'smit' },
  ]); // ["pranshu","mit","smit"]
 * ```
 */

export function uniq_by<T, U>(fn: (arg: T) => U, arr: readonly T[]): T[];
export function uniq_by<T, U>(fn: (arg: T) => U): (arr: readonly T[]) => T[];
export function uniq_by<T, U>(fn: (arg: T) => U, arr?: readonly T[]) {
  return curried2(
    function main(fn: (arg: T) => U, arr: readonly T[]) {
      let function_result: U[] = [];
      function for_eached(val: T) {
        let temp_result = fn(val);
        if (!includes(temp_result, function_result)) {
          function_result.push(temp_result);
        }
      }

      for_each(for_eached, arr);
      return function_result;
    },
    fn,
    arr
  );
}
