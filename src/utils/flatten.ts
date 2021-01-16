/**
 * @description it is equivalent to es6 arr.flat(Infinity)
 */
export function flatten<T>(arr: T[]) {
  return arr.flat(Infinity);
}
