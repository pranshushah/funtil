import { partial2 } from './internals/partial2';
import { Pred } from './types';
/**
 * @description takes couple of function and returns function that takes arguments for that function and if call returned function it returns true if both function returns true otherwise returns false. also works in partial style
 * @category Logic
 * @example
 * F.both(F.lt(30),F.gt(20))(25) // true
 * F.both(F.lt(30),F.gt(20))(15) // false
 */
export function both<T extends any[]>(
  fn1: Pred<T>,
  fn2: Pred<T>
): (...args: T) => boolean;

export function both<T extends any[]>(
  fn1: Pred<T>
): (fn2: Pred<T>) => (...args: T) => boolean;

export function both<T extends any[]>(fn1: Pred<T>, fn2?: Pred<T>) {
  return partial2(
    function main(fn1: Pred<T>, fn2: Pred<T>) {
      return function(...args: T) {
        return fn1(...args) && fn2(...args);
      };
    },
    fn1,
    fn2
  );
}
