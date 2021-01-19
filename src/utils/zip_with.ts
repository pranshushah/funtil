import { partial3 } from './internals/partial3';

/**
 * @description Creates a new list out of the two supplied by applying the function to each equally-positioned pair in the lists. The returned list is truncated to the length of the shorter of the two input lists.
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
): { (list1: T1[], list2: T2[]): R[]; (list2: T2[]): (list1: T1[]) => R[] };

export function zip_with<T1, T2, R>(
  fn: (arg1: T1, arg2: T2) => R,
  list1?: T1[],
  list2?: T2[]
) {
  return partial3(
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
