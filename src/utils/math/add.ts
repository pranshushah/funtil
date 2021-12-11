import { curried2 } from '../internals/curried2';

/**
 * @description takes two number and adds them.also works in curried form.
 * @category Math
 * @example
 * ```typescript
 * F.add(2,3) // 5;
 * let addToFive = F.add(5);
 * addToFive(6) // 11;
 * ```
 */
export function add(x: number): (y: number) => number;
export function add(x: number, y: number): number;

export function add(x: number, y?: number) {
  return curried2(
    function main(x: number, y: number) {
      return x + y;
    },
    x,
    y
  );
}
