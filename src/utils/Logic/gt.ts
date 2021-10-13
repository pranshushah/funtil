import { partial2 } from '../internals/partial2';
/**
 * @description takes two number returns whether second number is greater than first number, also work with partial form
 * @category Logic
 * @example
 * F.gt(20,23) // true
 * let isGreaterThan20= F.gt(20)
 * isGreaterThan20(15) // false
 * isGreaterThan20(25) // true
 *
 */
export function gt(x1: number, x2: number): boolean;
export function gt(x2: number): (x1: number) => boolean;

export function gt(x1: number, x2?: number) {
  return partial2(
    function main(x1: number, x2: number) {
      return x2 > x1;
    },
    x1,
    x2
  );
}
