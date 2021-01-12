import { Ord } from './types';
export function max_by<T>(keyFn: (a: T) => Ord, a: T, b: T) {
  return keyFn(a) > keyFn(b) ? a : b;
}
