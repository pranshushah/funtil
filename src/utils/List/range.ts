import { partial2 } from '../internals/partial2';

/**
 * @description returns an array of given range;if given number isNan or Infinity it throws array; also works in partial form.
 * @category List
 * @example
 * ```typescript
 * F.range(3,6) // [3,4,5]
 * F.range(1,Infinity) // throws error
 * F.range(NaN,11) // throws error
 * F.range(5,1) // []
 * ```
 */

export function range(from: number, to: number): number[];
export function range(from: number): (to: number) => number[];
export function range(from: number, to?: number) {
  return partial2(
    function main(from: number, to: number) {
      if (isNaN(from) || isNaN(to)) {
        return [];
      }
      if (!Number.isFinite(from) || !Number.isFinite(to)) {
        return [];
      }
      let n = from;
      let result: number[] = [];
      while (n < to) {
        result.push(n);
        n++;
      }
      return result;
    },
    from,
    to
  );
}
