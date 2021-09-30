import { partial2 } from './internals/partial2';

/**
 * @description Wrapper around `array.flatMap`.also supports partial form.
 * @category List
 * @example
 * let arr = ["it's always sunny in","philadelphia"];
 * F.flat_map(function mapper(x:string){
 *    return x.split(" ")
 * },arr) // ["it's", "always", "sunny", "in", "philadelphia"]
 */
export function flat_map<
  T extends any,
  R extends (val: T, index: number, arr: T[]) => any
>(mapper: R, arr: T[]): any[];

export function flat_map<
  T extends any,
  R extends (val: T, index: number, arr: T[]) => any
>(mapper: R): (arr: T[]) => any[];

export function flat_map<
  T extends any,
  R extends (val: T, index: number, arr: T[]) => any
>(mapper: R, arr?: T[]) {
  return partial2(
    function main(mapper: R, arr: T[]) {
      return arr.flatMap(mapper);
    },
    mapper,
    arr
  );
}
