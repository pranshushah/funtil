import { partial2 } from '../internals/partial2';

/**
 * @description takes two number and divides second number by first number.also works in partial form.
 * @category Math
 * ```typescript
 * F.divide(2,6) // 3;
 * let divideBy3 = F.divide(3);
 * divideBy3(27) // 9
 * ```
 */
export function divide(y: number, x: number): number;
export function divide(y: number): (x: number) => number;

export function divide(y: number, x?: number) {
  return partial2(
    function main(y: number, x: number) {
      return x / y;
    },
    y,
    x
  );
}
