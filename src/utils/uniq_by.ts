import { for_each } from './for_each';
import { includes } from './includes';
import { partial2 } from './internals/partial2';

export function uniq_by<T, U>(fn: (arg: T) => U, arr: readonly T[]): T[];
export function uniq_by<T, U>(fn: (arg: T) => U): (arr: readonly T[]) => T[];

export function uniq_by<T, U>(fn: (arg: T) => U, arr?: readonly T[]) {
  return partial2(
    function main(fn: (arg: T) => U, arr: readonly T[]) {
      let function_result: U[] = [];
      let result = arr.slice();
      function for_eached(val: T) {
        let temp_result = fn(val);
        if (!includes(temp_result, function_result)) {
          function_result.push(temp_result);
          result.push();
        }
      }

      for_each(for_eached, arr);
      return result;
    },
    fn,
    arr
  );
}
