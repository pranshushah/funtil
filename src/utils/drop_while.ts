import { L } from 'ts-toolbelt';
import { partial2 } from './internals/partial2';

/**
 * @description drops elements from front until predcation function returns false and returns copy of that array.
 */

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
  predicate_fn: (arg: L.UnionOf<T> | string) => boolean,
  xs?: T | string
) {
  return partial2(
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
