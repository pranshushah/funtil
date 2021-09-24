import { partial2 } from './internals/partial2';
import { Pred } from './types';

/**
 * @description takes two functions and returns a function that will take arguments for both of the function and returns true if any one function returns true otherwise returns false
 * @category Function
 */
export function either<T extends any[]>(
  fn1: Pred<T>,
  fn2: Pred<T>
): (...args: T) => boolean;

export function either<T extends any[]>(
  fn1: Pred<T>
): (fn2: Pred<T>) => (...args: T) => boolean;

export function either<T extends any[]>(fn1: Pred<T>, fn2?: Pred<T>) {
  return partial2(
    function main(fn1: Pred<T>, fn2: Pred<T>) {
      return function(...args: T) {
        return fn1(...args) || fn2(...args);
      };
    },
    fn1,
    fn2
  );
}
