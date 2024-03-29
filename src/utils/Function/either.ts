import { curried2 } from '../internals/curried2';
import { Placeholder, Pred } from '../types';

/**
 * @description takes two functions and returns a function that will take arguments for both of the function and returns true if any one function returns true otherwise returns false
 * @returns a function that takes arguments for both of the function.
 * @category Function
 * @example
 * ```typescript
 * let gt10 = F.gt(10);
 * let lt5 = F.lt(5);
 * F.either(gt10,lt5)(7) // false
 * F.either(gt10,lt5)(17) // true
 * ```
 */
export function either<T extends any[]>(
  x: Placeholder,
  fn2: Pred<T>
): (fn1: Pred<T>) => (...args: T) => boolean;

export function either<T extends any[]>(
  fn1: Pred<T>
): (fn2: Pred<T>) => (...args: T) => boolean;

export function either<T extends any[]>(
  fn1: Pred<T> | Placeholder,
  fn2?: Pred<T>
) {
  return curried2(
    function main(fn1: Pred<T>, fn2: Pred<T>) {
      return function(...args: T) {
        return fn1(...args) || fn2(...args);
      };
    },
    fn1,
    fn2
  );
}
