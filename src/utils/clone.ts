import cloned from 'clone-deep';
export function clone<T>(x: T) {
  return cloned(x);
}
