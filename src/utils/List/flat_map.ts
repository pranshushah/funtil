import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';

/**
 * @description Wrapper around `[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap](array.prototype.flatMap)`.also supports partial form.
 * @category List
 * @example
 * ```typescript
 * let arr = ["it's always sunny in","philadelphia"];
 * F.flat_map(function mapper(x:string){
 *    return x.split(" ")
 * },arr) // ["it's", "always", "sunny", "in", "philadelphia"]
 * ```
 */
export function flat_map<
  T extends any,
  R extends (val: T, index: number, arr: T[]) => any
>(mapper: R, arr: T[]): any[];

export function flat_map<
  T extends any,
  R extends (val: T, index: number, arr: T[]) => any
>(x: Placeholder, arr: T[]): (mapper: R) => any[];

export function flat_map<
  T extends any,
  R extends (val: T, index: number, arr: T[]) => any
>(mapper: R): (arr: T[]) => any[];

export function flat_map<
  T extends any,
  R extends (val: T, index: number, arr: T[]) => any
>(mapper: R, arr?: T[]) {
  return curried2(
    function main(mapper: R, arr: T[]) {
      return arr.flatMap(mapper);
    },
    mapper,
    arr
  );
}
