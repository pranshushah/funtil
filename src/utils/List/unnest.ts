/**
 * @description flattens given array once.
 * @category List
 * @example
 * F.unnest([
    [1, 2],
    [3, 4],
    [5, 6],
  ]); // [1,2,3,4,5,6]
 */
export function unnest<T>(arr: T[]) {
  return arr.flat(1);
}
