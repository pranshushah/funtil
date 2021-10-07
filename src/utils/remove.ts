import { partial3 } from './internals/partial3';

/**
 * @description same as [Array.prototype.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) but does not mutate original array and returns new copy.also works in partial form.
 * @category List
 * @example
 * F.remove(3,2,[1, 2, 3, 4, 5, 6]) // [1,2,3,6]
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
