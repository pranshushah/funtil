import { mod } from './mod';

/**
 * @description takes an array of number and returns median of it.
 * @category Math
 * @example
 * ```typescript
 * F.median([10, 2, 38, 23, 38, 23, 21]) // 23
 * ```
 */
export function median(list: number[]) {
  if (list.length === 0) {
    return NaN;
  } else if (list.length === 1) {
    return list[0];
  } else {
    const sortedlist = list.sort(function cb(a, b) {
      return a - b;
    });
    const middle =
      mod(2, list.length) === 1
        ? Math.floor(sortedlist.length / 2)
        : sortedlist.length / 2 - 1;

    return sortedlist[middle];
  }
}
