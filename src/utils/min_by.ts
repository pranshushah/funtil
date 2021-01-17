import { Ord } from './types';
/**
 * @description takes two value and returns a value who returns min value when call with given function.also works with partial form.
 *
 */
export function min_by<T>(keyFn: (a: T) => Ord, a: T, b: T) {
  return keyFn(a) > keyFn(b) ? b : a;
}
