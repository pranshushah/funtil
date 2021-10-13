import { for_each } from './for_each';
import { includes } from './includes';
import { partial2 } from '../internals/partial2';

/**
 * @description takes removal_list and list and removes every elements that is in removal_list.
 * @category List
 * @example
 * F.without([1,2,3],[1,2,3,4,5,6]) // [4,5,6]
 */
export function without<T>(removal_list: T[], list: T[]): T[];
export function without<T>(removal_list: T[]): (list: T[]) => T[];

export function without<T>(removal_list: T[], list?: T[]) {
  return partial2(
    function main(removal_list: T[], list: T[]) {
      let result: T[] = [];
      function for_eached(val: T) {
        if (!includes(val, removal_list)) {
          result.push(val);
        }
      }
      for_each(for_eached, list);
      return result;
    },
    removal_list,
    list
  );
}