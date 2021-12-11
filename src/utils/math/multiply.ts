import { partial2 } from '../internals/curried2';

/**
 * @description mulitplies two number.also works in partial form.
 * @category Math
 * @example
 * ```typescript
 * F.multiply(2,3) // 6
 * ```
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
