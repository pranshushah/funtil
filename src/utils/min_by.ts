import { partial3 } from './internals/partial3';
import { Ord } from './types';
/**
 * @description takes two value and returns a value who returns min value when call with given function.also works with partial form.
 * @category Math
 */
export function min_by<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
export function min_by<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
export function min_by<T>(
  keyFn: (a: T) => Ord
): {
  (a: T, b: T): T;
  (a: T): (b: T) => T;
};
export function min_by<T>(keyFn: (a: T) => Ord, a?: T, b?: T) {
  return partial3(
    function main(keyFn: (a: T) => Ord, a: T, b: T) {
      return keyFn(a) > keyFn(b) ? b : a;
    },
    keyFn,
    a,
    b
  );
}
