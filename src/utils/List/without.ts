import { for_each } from './for_each';
import { includes } from './includes';
import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';

/**
 * @description takes removal_list and list and removes every elements that is in removal_list.
 * @category List
 * @example
 * ```typescript
 * F.without([1,2,3],[1,2,3,4,5,6]) // [4,5,6]
 * ```
 */
export function without<T>(removal_list: T[], list: T[]): T[];
export function without<T>(
  x: Placeholder,
  list: T[]
): (removal_list: T[]) => T[];
export function without<T>(removal_list: T[]): (list: T[]) => T[];

export function without<T>(removal_list: T[] | Placeholder, list?: T[]) {
  return curried2(
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
