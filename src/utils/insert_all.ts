import { partial3 } from './internals/partial3';

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
