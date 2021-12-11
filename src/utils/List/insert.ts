import produce from 'immer';
import { curried3 } from '../internals/curried3';

/**
 * insert element at given index of array and returns new copy of array,also works with partial form.
 * @category List
 * @example
 * ```typescript
 * F.insert(2,"pranshu",["mit","sanket","zoom","nisarg"]) //  ["mit", "sanket", "pranshu", "zoom", "nisarg"]
 * ```
 */
export function insert<T>(
  insert_index: number,
  element: T,
  arr: readonly T[]
): T[];

export function insert<T>(
  insert_index: number,
  element: T
): (arr: readonly T[]) => T[];

export function insert(
  insert_index: number
): {
  <T>(element: T, arr: readonly T[]): T[];
  <T>(element: T): (arr: readonly T[]) => T[];
};

export function insert<T>(
  insert_index: number,
  element?: T,
  arr?: readonly T[]
) {
  return curried3(
    function main(insert_index: number, element: T, arr: readonly T[]) {
      return produce(arr, (draft: T[]) => {
        draft.splice(insert_index, 0, element);
      });
    },
    insert_index,
    element,
    arr
  );
}
