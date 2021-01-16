import { partial2 } from './internals/partial2';
/**
 * @description takes two number returns whether second number is greater than first number, also work with partial form
 */
export function gt(x2: number, x1: number): boolean;
export function gt(x2: number): (x1: number) => boolean;

export function gt(x2: number, x1?: number) {
  return partial2(
    function main(x2: number, x1: number) {
      return x1 > x2;
    },
    x2,
    x1
  );
}
