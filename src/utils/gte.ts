import { partial2 } from './internals/partial2';

/**
 * @description takes two number returns whether second number is greater or equal to first number,also work with partial form
 * @category Logic
 * @example
 * F.gte(20,23) // true
 * let isGreaterThanOrEqualTo20= F.gte(20)
 * isGreaterThanOrEqualTo20(15) // false
 * isGreaterThanOrEqualTo20(20) // true
 * isGreaterThanOrEqualTo20(33) // true
 */
export function gte(x2: number, x1: number): boolean;
export function gte(x2: number): (x1: number) => boolean;

export function gte(x2: number, x1?: number) {
  return partial2(
    function main(x2: number, x1: number) {
      return x1 >= x2;
    },
    x2,
    x1
  );
}
