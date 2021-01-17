import { partial3 } from './internals/partial3';
import { Ord } from './types';
/**
 * @description takes two value and returns a value who returns max value when call with given function.also works with partial form.
 */
export function max_by<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
export function max_by<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
export function max_by<T>(
  keyFn: (a: T) => Ord
): {
  (a: T, b: T): T;
  (a: T): (b: T) => T;
};

export function max_by<T>(keyFn: (a: T) => Ord, a?: T, b?: T) {
  return partial3(
    function main(keyFn: (a: T) => Ord, a: T, b: T) {
      return keyFn(a) > keyFn(b) ? a : b;
    },
    keyFn,
    a,
    b
  );
}
