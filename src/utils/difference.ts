import { for_each } from './for_each';
import { includes } from './includes';
import { partial2 } from './internals/partial2';

export function difference<T>(arr1: T[], arr2: T[]): T[];
export function difference<T>(arr1: T[]): (arr2: T[]) => T[];

export function difference<T>(arr1: T[], arr2?: T[]) {
  return partial2(
    function main(arr1: T[], arr2: T[]) {
      let result: T[] = [];
      for_each(function each(val: T) {
        if (!includes(val, arr2)) {
          result.push(val);
        }
      }, arr1);
      return result;
    },
    arr1,
    arr2
  );
}
