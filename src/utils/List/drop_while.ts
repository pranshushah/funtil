import { L } from 'ts-toolbelt';
import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';

/**
 * @description drops elements from front until predcation function returns false and returns copy of that array or string.also wokrs in partial form
 * @returns shallow copy of the array with removed elements.
 * @category List
 * @example
 * ```typescript
 *function isOdd(x:number){
 *  return F.mod(2,x) === 1;
 *}
 *F.drop_while(isOdd,[1,3,4,5]); //[4,5]
 *F.drop_while((s: string) => s !== 'n', 'pranshu'); // 'nshu'
 * ```
 */

export function drop_while<T extends any[]>(
  x: Placeholder,
  xs: T
): (predicate_fn: (arg: L.UnionOf<T>) => boolean) => T;

export function drop_while<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T>) => boolean,
  xs: T
): T;
export function drop_while<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T>) => boolean
): (xs: T) => T;

export function drop_while(
  predicate_fn: (arg: string) => boolean,
  xs: string
): string;

export function drop_while(
  predicate_fn: (arg: string) => boolean
): (xs: string) => string;

export function drop_while<T extends any[]>(
  predicate_fn: ((arg: L.UnionOf<T> | string) => boolean) | Placeholder,
  xs?: T | string
) {
  return curried2(
    function main_drop_while(
      predicate_fn: (arg: L.UnionOf<T> | string) => boolean,
      xs: T | string
    ) {
      let first_index = 0;
      while (first_index < xs.length && predicate_fn(xs[first_index])) {
        first_index++;
      }
      return xs.slice(first_index, xs.length);
    },
    predicate_fn,
    xs
  );
}
