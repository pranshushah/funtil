import { curried3 } from '../internals/curried3';
import { equals } from '../math/equals';
/**
 * @description takes predicate function fn and 2 elements.returns true if fn(x1) === fn(x2) otherwise false. it uses F.equals to compare. it also works with partial arguments.
 * @category Logic
 * @example
 * ```typescript
 * let gt10 = gt(10);
 * F.eq_by(gt10,31,22); // true
 * F.eq_by(gt10,31,5) // false
 * ```
 */
export function eq_by<T>(fn: (x: T) => any, x1: T, x2: T): boolean;
export function eq_by<T>(fn: (x: T) => any, x1: T): (x2: T) => boolean;
export function eq_by<T>(
  fn: (x: T) => boolean
): { (x1: T, x2: T): boolean; (x1: T): (x2: T) => boolean };

export function eq_by<T>(fn: (x: T) => boolean, x1?: T, x2?: T) {
  return curried3(
    function main(fn: (x: T) => boolean, x1: T, x2: T) {
      return equals(fn(x1), fn(x2));
    },
    fn,
    x1,
    x2
  );
}
