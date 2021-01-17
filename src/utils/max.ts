import { partial2 } from './internals/partial2';
import { Ord } from './types';
/**
 * @description returns maximum value of two values. works with string,number,date and boolean.
 */
export function max<T extends Ord>(x1: T, x2: T): T;
export function max<T extends Ord>(x1: T): (x2: T) => T;

export function max<T extends Ord>(x1: T, x2?: T) {
  return partial2(
    function main(x1: T, x2: T) {
      return x1 > x2 ? x1 : x2;
    },
    x1,
    x2
  );
}
