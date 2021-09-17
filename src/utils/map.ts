import { partial2 } from './internals/partial2';

/**
 * @description same as es6 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map|Array.map()}. also works with partial form.
 */
export function map<T, R>(
  mapper: (val: T, index: number, arr: readonly T[]) => R,
  arr: readonly T[]
): R[];

export function map<T, R>(
  mapper: (val: T, index: number, arr: readonly T[]) => R
): (arr: readonly T[]) => R[];

export function map<T, R>(
  mapper: (val: T, index: number, arr: readonly T[]) => R,
  arr?: readonly T[]
) {
  return partial2(
    function main(
      mapper: (val: T, index: number, arr: readonly T[]) => R,
      arr: readonly T[]
    ) {
      let mappedArray: R[] = [];
      for (let [index, val] of arr.entries()) {
        mappedArray.push(mapper(val, index, arr));
      }
      return mappedArray;
    },
    mapper,
    arr
  );
}
