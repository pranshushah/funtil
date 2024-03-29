import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';
import { slice } from './slice';

/**
 * @description Splits a given list or string at a given index; also works with partial form.
 * @category List
 * @example
 * ```typescript
 * F.split_at(3,[1,2,3,4,5,6,7,8,9]) // [[1,2,3],[4,5,6,7,8,9]]
 * F.split_at(3, 'pranshu'); // ["pra","nshu"]
 * ```
 */
export function split_at<T extends readonly any[]>(index: number, xs: T): T[];
export function split_at<T extends readonly any[]>(
  x: Placeholder,
  xs: T
): (index: number) => T[];

export function split_at(
  index: number
): { <T extends readonly any[]>(xs: T): T[]; (xs: string): string[] };
export function split_at(index: number, xs: string): string[];
export function split_at(
  x: Placeholder,
  xs: string
): (index: number) => string[];

export function split_at<T extends readonly any[]>(
  index: number | Placeholder,
  xs?: T | string
) {
  return curried2(
    function main(index: number, xs: T | string) {
      if (Array.isArray(xs)) {
        return [slice(0, index, xs), slice(index, xs.length, xs)];
      } else {
        return [
          slice(0, index, xs as string),
          slice(index, xs.length, xs as string),
        ];
      }
    },
    index,
    xs
  );
}
