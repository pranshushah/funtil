import { partial2 } from './internals/partial2';

/**
 * @description takes two number returns whether second number is greater or equal to first number,also work with partial form
 */
export function gte(x1: number, x2: number): boolean;
export function gte(x1: number): (x2: number) => boolean;

export function gte(x1: number, x2?: number) {
  return partial2(
    function main(x1: number, x2: number) {
      return x1 >= x2;
    },
    x1,
    x2
  );
}
