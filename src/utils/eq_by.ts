import { partial3 } from './internals/partial3';
import { equals } from './math/equals';
/**
 * @description takes predicate function fn and 2 elements.returns true if fn(x1) === fn(x2) otherwise false. it uses F.equals to compare. it also works with partial arguments
 */
export function eq_by<T>(fn: (x: T) => boolean, x1: T, x2: T): boolean;
export function eq_by<T>(fn: (x: T) => boolean, x1: T): (x2: T) => boolean;
export function eq_by<T>(
  fn: (x: T) => boolean
): { (x1: T, x2: T): boolean; (x1: T): (x2: T) => boolean };

export function eq_by<T>(fn: (x: T) => boolean, x1?: T, x2?: T) {
  return partial3(
    function main(fn: (x: T) => boolean, x1: T, x2: T) {
      return equals(fn(x1), fn(x2));
    },
    fn,
    x1,
    x2
  );
}
