import produce from 'immer';
import { curried2 } from '../internals/curried2';

/**
 * @description takes an element and array.adds that element at the start of the array.it returns new copy of array;also works with partial form.
 * @category List
 * @example
 * ```typescript
 * F.prepend(1,[2,3,4]) // [1,2,3,4]
 * ```
 */
export function prepend<T>(el: T, arr: T[]): T[];
export function prepend<T>(el: T): (arr: T[]) => T[];

export function prepend<T>(el: T, arr?: T[]) {
  return curried2(
    function main(el: T, arr: T[]) {
      return produce(arr, (draft: T[]) => {
        draft.splice(0, 0, el);
      });
    },
    el,
    arr
  );
}
