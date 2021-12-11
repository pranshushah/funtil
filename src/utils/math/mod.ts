import { curried2 } from '../internals/curried2';

/**
 * @description takes two number y and x returns x%y.also works in curried form.
 * @category Math
 * @example
 * ```typescript
 * F.mod(2,6) // 0
 * let modOf2 = F.mod(2);
 * modOf2(12) // 0
 * ```
 */
export function mod(y: number, x: number): number;
export function mod(y: number): (x: number) => number;

export function mod(y: number, x?: number) {
  return curried2(
    function main(y: number, x: number) {
      return x % y;
    },
    y,
    x
  );
}
