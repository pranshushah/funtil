export function init<T>(xs: T[]): T[];
export function init(xs: string): string;
/**
 * @description returns an array or string without last element of given array or string.
 * @category List
 * @example
 * init("pranshu") //pransh
 * init([1,2,3,4]) // [1,2,3]
 */
export function init<T>(xs: T[] | string) {
  return xs.slice(0, xs.length - 1);
}
