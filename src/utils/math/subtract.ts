import { curried2 } from '../internals/curried2';

/**
 * @description takes two numbers, y and x. returns x - y.also works in curried form.
 * @category Math
 * @example
 * F.subtract(1,4) // 3;
 *
 */
export function subtract(y: number): (x: number) => number;
export function subtract(y: number, x: number): number;

export function subtract(y: number, x?: number) {
  return curried2(
    function main(y: number, x: number) {
      return x - y;
    },
    y,
    x
  );
}
