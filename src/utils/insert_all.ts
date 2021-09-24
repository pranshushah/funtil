import { partial3 } from './internals/partial3';
/**
 * @description insert array of elements at given index of array and returns new copy of array., also works on partial form.
 * @category List
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
