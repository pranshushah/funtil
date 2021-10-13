import { partial3 } from '../internals/partial3';
/**
 * @description insert array of elements at given index of array and returns new copy of array., also works on partial form.
 * @returns new copy of array with new elements
 * @category List
 * @example
 * F.insert_all(2,[6,7],[1,2,3,4,5]) // [1,2,6,7,3,4,5]
 * F.insert_all(111,[6,7],[1,2,3,4,5]) // [1,2,3,4,5,6,7]
 * F.insert_all(-1,[6,7],[1,2,3,4,5]) // [6,7,1,2,3,4,5]
 * F.insert_all(-111,[6,7],[1,2,3,4,5]) // [6,7,1,2,3,4,5]
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
  return partial3(
    function main(
      insert_index: number,
      elements: readonly T[],
      arr: readonly T[]
    ) {
      return [
        ...arr.slice(0, insert_index),
        ...elements,
        ...arr.slice(insert_index, arr.length),
      ];
    },
    insert_index,
    elements,
    arr
  );
}