import { partial3 } from '../internals/partial3';

/**
 * @description wrapper around [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) . also works with partial form.
 * @category List
 * @example
 * F.slice(1,4,[1,2,3,4,5,6]) // [2,3,4]
 */
export function slice<T extends readonly any[]>(
  from_index: number,
  to_index: number,
  xs: T
): T;

export function slice(from_index: number, to_index: number, xs: string): string;

export function slice(
  from_index: number,
  to_index: number
): { <T extends readonly any[]>(xs: T): T; (xs: string): string };

export function slice(
  from_index: number
): {
  <T extends readonly any[]>(to_index: number, xs: T): T;
  (to_index: number): <T extends readonly any[]>(xs: T) => T;
  (to_index: number, xs: string): string;
  (to_index: number): (xs: string) => string;
};

export function slice<T extends readonly any[]>(
  from_index: number,
  to_index?: number,
  xs?: T | string
) {
  return partial3(
    function main(from_index: number, to_index: number, xs: T | string) {
      return xs.slice(from_index, to_index);
    },
    from_index,
    to_index,
    xs
  );
}
