import { curried2 } from '../internals/curried2';
/**
 * @description takes two number  and checks whether second number is less than first number, also works with partial form.
 * @category Logic
 * @example
 * ```typescript
 * F.lt(33,23) // true
 * let lessThan20 = F.lt(20);
 * lessThan20(33) // false
 * lessThan20(12) // true
 * ```
 */
export function lt(x2: number, x1: number): boolean;
export function lt(x2: number): (x1: number) => boolean;

export function lt(x2: number, x1?: number) {
  return curried2(
    function main(x2: number, x1: number) {
      return x1 < x2;
    },
    x2,
    x1
  );
}
