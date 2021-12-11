import { partial2 } from '../internals/curried2';
/**
 * @description returns maximum value of two number.
 * @category Math
 * @example
 * F.max(22,23) // 23
 * F.max(22,Infinity) // Infinity
 */
export function max(x1: number, x2: number): number;
export function max(x1: number): (x2: number) => number;

export function max(x1: number, x2?: number) {
  return partial2(
    function main(x1: number, x2: number) {
      return x1 > x2 ? x1 : x2;
    },
    x1,
    x2
  );
}
