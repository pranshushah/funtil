import { partial2 } from './internals/partial2';
import { slice } from './slice';
export function split_every<T>(n: number, list: readonly T[]): T[][];
export function split_every<T>(n: number): (list: readonly T[]) => T[][];
export function split_every(n: number, list: string): string[];
export function split_every(n: number): (list: string) => string[];

/**
 * @description Splits a collection into slices of the specified length; also works with partial form.
 */
export function split_every<T extends string | any[]>(n: number, list?: T) {
  return partial2(
    function main(n: number, list: T) {
      let result: (T[] | string)[] = [];
      let index = 0;
      while (index < list.length) {
        if (Array.isArray(list)) {
          result.push(slice(index, (index += n), list));
        } else if (typeof list === 'string') {
          result.push(slice(index, (index += n), list));
        }
      }
      return result;
    },
    n,
    list
  );
}
