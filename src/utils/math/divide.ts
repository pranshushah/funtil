import { curried2 } from '../internals/curried2';

/**
 * @description takes two number and divides second number by first number.also works in curried form.
 * @category Math
 * @example
 * ```typescript
 * F.divide(2,6) // 3;
 * let divideBy3 = F.divide(3);
 * divideBy3(27) // 9
 * ```
 */
export function divide(y: number, x: number): number;
export function divide(y: number): (x: number) => number;

export function divide(y: number, x?: number) {
  return curried2(
    function main(y: number, x: number) {
      return x / y;
    },
    y,
    x
  );
}
