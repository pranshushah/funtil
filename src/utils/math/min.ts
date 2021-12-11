import { partial2 } from '../internals/curried2';
/**
 * @description returns minimum value of two values. works with string,number,date and boolean.also works with partial form.
 * @category Math
 * F.min(22,23) // 22
 * F.max(22,-Infinity) // -Infinity
 */
export function min(x1: number, x2: number): number;
export function min(x1: number): (x2: number) => number;

export function min(x1: number, x2?: number) {
  return partial2(
    function main(x1: number, x2: number) {
      return x1 > x2 ? x2 : x1;
    },
    x1,
    x2
  );
}
