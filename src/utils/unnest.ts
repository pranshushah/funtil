/**
 * @description flattens given array once.
 * @category List
 */
export function unnest<T>(arr: T[]) {
  return arr.flat(1);
}
