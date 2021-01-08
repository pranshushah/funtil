import { partial2 } from './internals/partial2';

export function flat_map<
  T,
  R extends (val: T, index?: number, arr?: T[]) => any
>(mapper: R, arr: T[]): any[];

export function flat_map<
  T,
  R extends (val: T, index?: number, arr?: T[]) => any
>(mapper: R): (arr: T[]) => any[];

export function flat_map<
  T,
  R extends (val: T, index?: number, arr?: T[]) => any
>(mapper: R, arr?: T[]) {
  return partial2(
    function map(mapper: R, arr: T[]) {
      return arr.flatMap(mapper);
    },
    mapper,
    arr
  );
}
