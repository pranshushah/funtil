import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';
import { slice } from './slice';

/**
 * @description Splits a collection into slices of the specified length; also works with partial form.
 * @category List
 * @example
 * ```typescript
 * F.split_every(3,[1,2,3,4,5,6,7,8]) // [[1,2,3],[4,5,6],[7,8]]
 * F.split_every(3,"pranshu") // ["pra","nsh","u"]
 * ```
 */

export function split_every<T>(n: number, list: readonly T[]): T[][];
export function split_every<T>(
  x: Placeholder,
  list: readonly T[]
): (n: number) => T[][];
export function split_every<T>(
  n: number
): { (list: readonly T[]): T[][]; (list: string): string[] };
export function split_every(n: number, list: string): string[];
export function split_every(
  x: Placeholder,
  list: string
): (n: number) => string[];

export function split_every<T extends string | any[]>(
  n: number | Placeholder,
  list?: T
) {
  return curried2(
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
