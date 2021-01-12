import { equals } from './math/equals';

export function eq_by<T>(fn: (x: T) => boolean, x1: T, x2: T) {
  return equals(fn(x1), fn(x2));
}
