import { curried2 } from '../internals/curried2';

/**
 * Takes an array and a predication function and splits the array when predication function reuturns true; also works with partial form.
 * @category List
 * @example
 * ```typescript
 * F.split_when(F.gt(5),[11, 2, 3, 6, 1, 4, 8, 3]) // [[11],[2,3,6],[1,4,8],[3]]
 * ```
 */
export function split_when<T>(
  pred_fn: (arg: T) => boolean,
  list: readonly T[]
): T[][];

export function split_when<T>(
  pred_fn: (arg: T) => boolean
): (list: readonly T[]) => T[][];

export function split_when<T>(
  pred_fn: (arg: T) => boolean,
  list?: readonly T[]
) {
  return curried2(
    function main(pred_fn: (arg: T) => boolean, list: readonly T[]) {
      var pre: T[] = [];
      let index = 0;
      let result: T[][] = [];
      while (index < list.length) {
        if (pred_fn(list[index])) {
          pre.push(list[index]);
          result.push(pre);
          pre = [];
        } else {
          pre.push(list[index]);
        }
        index++;
      }
      if (pre.length > 0) result.push(pre);
      return result;
    },
    pred_fn,
    list
  );
}
