/**
 * @description flattens given array once.
 */
export function unnest<T>(arr: T[]) {
  return arr.flat(1);
}
