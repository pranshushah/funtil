import { partial2 } from '../internals/partial2';

/**
 * @description takes two number and adds them.also works in partial form.
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
  return partial2(
    function main(x: number, y: number) {
      return x + y;
    },
    x,
    y
  );
}
