export function last<T>(xs: T[]): T | undefined;
export function last(xs: string): string;
/**
 * @description returns last element of array or string.
 * @category List
 */
export function last<T>(xs: T[] | string) {
  if (Array.isArray(xs)) {
    return xs[xs.length - 1];
  } else {
    return xs.charAt(xs.length - 1);
  }
}
