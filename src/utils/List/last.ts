export function last<T>(xs: T[]): T | undefined;
export function last(xs: string): string;
/**
 * @description returns last element of array or string.
 * @category List
 * @example
 * F.last([1,2,3,4]) // 4
 * F.last("pranshu") // 'u'
 *
 */
export function last<T>(xs: T[] | string) {
  if (Array.isArray(xs)) {
    return xs[xs.length - 1];
  } else {
    return xs.charAt(xs.length - 1);
  }
}
