import { curried2 } from '../internals/curried2';
/**
 * @description takes two number  and checks whether second number is less than first number, also works with partial form.
 * @category Logic
 * @example
 * ```typescript
 * F.lte(33,23) // true
 * let lessThanOrEqual20 = F.lte(20);
 * lessThanOrEqual20(33) // false
 * lessThanOrEqual20(12) // true
 * lessThanOrEqual20(20) // true
 * ```
 */
export function lte(x2: number, x1: number): boolean;
export function lte(x2: number): (x1: number) => boolean;

export function lte(x2: number, x1?: number) {
  return curried2(
    function main(x2: number, x1: number) {
      return x1 <= x2;
    },
    x2,
    x1
  );
}
