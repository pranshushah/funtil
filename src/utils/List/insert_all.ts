import produce from 'immer';
import { curried3 } from '../internals/curried3';
/**
 * @description insert array of elements at given index of array and returns new copy of array., also works on partial form.
 * @returns new copy of array with new elements
 * @category List
 * @example
 * ```typescript
 * F.insert_all(2,[6,7],[1,2,3,4,5]) // [1,2,6,7,3,4,5]
 * F.insert_all(111,[6,7],[1,2,3,4,5]) // [1,2,3,4,5,6,7]
 * F.insert_all(-1,[6,7],[1,2,3,4,5]) // [6,7,1,2,3,4,5]
 * F.insert_all(-111,[6,7],[1,2,3,4,5]) // [6,7,1,2,3,4,5]
 * ```
 */
export function insert_all<T>(
  insert_index: number,
  elements: readonly T[],
  arr: readonly T[]
): T[];

export function insert_all<T>(
  insert_index: number,
  elements: readonly T[]
): (arr: readonly T[]) => T[];

export function insert_all(
  insert_index: number
): {
  <T>(elements: readonly T[], arr: readonly T[]): T[];
  <T>(elements: readonly T[]): (arr: readonly T[]) => T[];
};

export function insert_all<T>(
  insert_index: number,
  elements?: readonly T[],
  arr?: readonly T[]
) {
  return curried3(
    function main(
      insert_index: number,
      elements: readonly T[],
      arr: readonly T[]
    ) {
      return produce(arr, (draft: T[]) => {
        draft.splice(insert_index, 0, ...elements);
      });
    },
    insert_index,
    elements,
    arr
  );
}
