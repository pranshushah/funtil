import { Ord } from './types';
export function min_by<T>(keyFn: (a: T) => Ord, a: T, b: T) {
  return keyFn(a) > keyFn(b) ? b : a;
}
