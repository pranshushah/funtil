import { partial2 } from './internals/partial2';
/**
 * @description takes two number  and checks whether second number is less than first number, also works with partial form.
 */
export function lte(x2: number, x1: number): boolean;
export function lte(x2: number): (x1: number) => boolean;

export function lte(x2: number, x1?: number) {
  return partial2(
    function main(x2: number, x1: number) {
      return x1 <= x2;
    },
    x2,
    x1
  );
}
