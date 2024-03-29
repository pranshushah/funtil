import { curried2 } from '../internals/curried2';
import { Placeholder, Pred } from '../types';
/**
 * @description takes couple of function and returns function that takes arguments for that function and if call returned function it returns true if both function returns true otherwise returns false. also works in partial style
 * @category Logic
 * @example
 * ```typescript
 * F.both(F.lt(30),F.gt(20))(25) // true
 * F.both(F.lt(30),F.gt(20))(15) // false
 * ```
 */
export function both<T extends any[]>(
  fn1: Pred<T>,
  fn2: Pred<T>
): (...args: T) => boolean;

export function both<T extends any[]>(
  x: Placeholder,
  fn2: Pred<T>
): (fn1: Pred<T>) => (...args: T) => boolean;

export function both<T extends any[]>(
  fn1: Pred<T>
): (fn2: Pred<T>) => (...args: T) => boolean;

export function both<T extends any[]>(
  fn1: Pred<T> | Placeholder,
  fn2?: Pred<T>
) {
  return curried2(
    function main(fn1: Pred<T>, fn2: Pred<T>) {
      return function(...args: T) {
        return fn1(...args) && fn2(...args);
      };
    },
    fn1,
    fn2
  );
}
