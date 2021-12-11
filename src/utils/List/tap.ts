import { partial2 } from '../internals/curried2';

/**
 * @description takes a function and its argument. it calls given function and returns the argument.
 * @category List
 * @example
 * ```typescript
 * let number = 1;

  function logger(x: number) {
    number = number + x;
  }
  F.tap(logger,3) // returns 3 , number === 4
 * ```
 */

export function tap<T>(fn: (arg: T) => any, x: T): T;
export function tap<T>(fn: (arg: T) => any): (x: T) => T;

export function tap<T>(fn: (arg: T) => any, x?: T) {
  return partial2(
    function main(fn: (arg: T) => any, x: T) {
      fn(x);
      return x;
    },
    fn,
    x
  );
}
