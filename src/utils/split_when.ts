import { partial2 } from './internals/partial2';

/**
 * Takes an array and a predication function and splits the array when predication function reuturns true; also works with partial form.
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
  return partial2(
    function main(pred_fn: (arg: T) => boolean, list: readonly T[]) {
      var pre = [];
      let index = 0;
      while (index < list.length && !pred_fn(list[index])) {
        pre.push(list[index]);
        index++;
      }
      return [pre, list.slice(index)];
    },
    pred_fn,
    list
  );
}
