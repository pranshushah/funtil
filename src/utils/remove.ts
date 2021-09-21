import { partial3 } from './internals/partial3';

/**
 * @description same as ```Array.splice(start,delete_count)``` but does not mutate original array and returns new copy.also works in partial form.
 */
export function remove<T>(start: number, delete_count: number, arr: T[]): T[];
export function remove<T>(
  start: number,
  delete_count: number
): (arr: T[]) => T[];
export function remove<T>(
  start: number
): {
  (delete_count: number, arr: T[]): T[];
  (delete_count: number): (arr: T[]) => T[];
};

export function remove<T>(start: number, delete_count?: number, arr?: T[]) {
  return partial3(
    function main(start: number, delete_count: number, arr: T[]) {
      let result: T[] = arr.slice(0);
      result.splice(start, delete_count);
      return result;
    },
    start,
    delete_count,
    arr
  );
}
