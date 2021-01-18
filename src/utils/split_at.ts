import { partial2 } from './internals/partial2';
import { slice } from './slice';

/**
 * @description Splits a given list or string at a given index; also works with partial form.
 */
export function split_at<T extends readonly any[]>(index: number, xs: T): T[];
export function split_at<T extends readonly any[]>(
  index: number
): (xs: T) => T[];
export function split_at(index: number, xs: string): string[];
export function split_at(index: number): (xs: string) => string[];

export function split_at<T extends readonly any[]>(
  index: number,
  xs?: T | string
) {
  return partial2(
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
