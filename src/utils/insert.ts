import { partial3 } from './internals/partial3';

export function insert<T>(
  insert_index: number,
  elements: T,
  arr: readonly T[]
): T[];

export function insert<T>(
  insert_index: number,
  elements: T
): (arr: readonly T[]) => T[];

export function insert(
  insert_index: number
): {
  <T>(elements: T, arr: readonly T[]): T[];
  <T>(elements: T): (arr: readonly T[]) => T[];
};

export function insert<T>(
  insert_index: number,
  element?: T,
  arr?: readonly T[]
) {
  return partial3(
    function main(insert_index: number, element: T, arr: readonly T[]) {
      let return_arr = arr.slice(0, arr.length);
      return_arr.splice(insert_index, 0, element);
      return return_arr;
    },
    insert_index,
    element,
    arr
  );
}
