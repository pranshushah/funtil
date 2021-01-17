import { partial2 } from './internals/partial2';

/**
 * @description same as es6 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map|Array.map()}. also works with partial form.
 */
export function map<
  T,
  R extends (val: T, index: number, arr: readonly T[]) => any
>(mapper: R, arr: readonly T[]): ReturnType<R>[];

export function map<
  T,
  R extends (val: T, index: number, arr: readonly T[]) => any
>(mapper: R): (arr: readonly T[]) => ReturnType<R>[];

export function map<
  T,
  R extends (val: T, index: number, arr: readonly T[]) => any
>(mapper: R, arr?: readonly T[]) {
  return partial2(
    function main(mapper: R, arr: readonly T[]) {
      let mappedArray: ReturnType<R>[] = [];
      for (let [index, val] of arr.entries()) {
        mappedArray.push(mapper(val, index, arr));
      }
      return mappedArray;
    },
    mapper,
    arr
  );
}
