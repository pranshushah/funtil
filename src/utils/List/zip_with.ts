import { curried3 } from '../internals/curried3';

/**
 * @description Creates a new list out of the two supplied by applying the function to each equally-positioned pair in the lists. The returned list is truncated to the length of the shorter of the two input lists.
 * @category List
 * @example
 * ```typescript
 * function concate(x: number, y: string) {
 *    return x + y;
 * }
 * F.zip_with(concate, [1, 2, 3, 4], ['1', '2']); // ['11','22']
 * ```
 */
export function zip_with<T1, T2, R>(
  fn: (arg1: T1, arg2: T2) => R,
  list1: T1[],
  list2: T2[]
): R[];

export function zip_with<T1, T2, R>(
  fn: (arg1: T1, arg2: T2) => R,
  list1: T1[]
): (list2: T2[]) => R[];

export function zip_with<T1, T2, R>(
  fn: (arg1: T1, arg2: T2) => R
): { (list1: T1[], list2: T2[]): R[]; (list1: T1[]): (list2: T2[]) => R[] };

export function zip_with<T1, T2, R>(
  fn: (arg1: T1, arg2: T2) => R,
  list1?: T1[],
  list2?: T2[]
) {
  return curried3(
    function main(fn: (arg1: T1, arg2: T2) => R, list1: T1[], list2: T2[]) {
      let result: R[] = [];
      const length = Math.min(list1.length, list2.length);
      for (let index = 0; index < length; index++) {
        result.push(fn(list1[index], list2[index]));
      }
      return result;
    },
    fn,
    list1,
    list2
  );
}
