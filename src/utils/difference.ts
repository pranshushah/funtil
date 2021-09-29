import { for_each } from './for_each';
import { includes } from './includes';
import { partial2 } from './internals/partial2';

/**
 * @description takes 2 array and returns array that does not contain any value of second array.it uses F.equals for eqality.
 * @returns an array that contains values of the first array but does not exist in second array.
 * @example
 * F.difference([1,2,3,4,5],[2,4,6]); // [1,3,5]
 * F.difference([{id:1,task:"task1"},{id:2,task:"task2"},{id:3,task:"task3"}],[{id:1,task:"task1"},{id:4,task:"task4"}]) // [{id:2,task:"task2"},{id:3,task:"task3"}]
 * @category List
 */
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
