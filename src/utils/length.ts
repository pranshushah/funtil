/**
 * @description returns length of given string or array.
 * @category List
 * @example
 * F.length("pranshu") // 7
 * F.length([1,2,3,4]) // 4
 * F.length([]) // 0
 *
 */
export function length<T>(xs: T[] | string) {
  return xs.length;
}
