import { partial2 } from '../internals/partial2';

/**
 * @description takes two numbers, y and x. returns x - y.also works in partial form.
 * @category Math
 */
export function subtract(y: number): (x: number) => number;
export function subtract(y: number, x: number): number;

export function subtract(y: number, x?: number) {
  return partial2(
    function main(y: number, x: number) {
      return x - y;
    },
    y,
    x
  );
}
