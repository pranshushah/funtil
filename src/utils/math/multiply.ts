import { curried2 } from '../internals/curried2';

/**
 * @description mulitplies two number.also works in curried form.
 * @category Math
 * @example
 * ```typescript
 * F.multiply(2,3) // 6
 * ```
 */
export function multiply(x: number, y: number): number;
export function multiply(x: number): (y: number) => number;

export function multiply(x: number, y?: number) {
  return curried2(
    function main(x: number, y: number) {
      return x * y;
    },
    x,
    y
  );
}
