import { partial2 } from './internals/partial2';

/**
 * @description takes a function and its argument. it calls given function and returns the argument.
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
