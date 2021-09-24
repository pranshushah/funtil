import { partial2 } from '../internals/partial2';

/**
 * @description mulitplies two number.also works in partial form.
 * @category Math
 */
export function multiply(x: number, y: number): number;
export function multiply(x: number): (y: number) => number;

export function multiply(x: number, y?: number) {
  return partial2(
    function main(x: number, y: number) {
      return x * y;
    },
    x,
    y
  );
}
