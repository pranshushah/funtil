import { L } from 'ts-toolbelt';
import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';

/**
 * @description takes predication funtion and array and returns new array containg values from behind from given array while predication function returns true.
 * @category List
 */
export function take_while_last<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T>) => boolean,
  xs: T
): T;

export function take_while_last<T extends any[]>(
  x: Placeholder,
  xs: T
): (predicate_fn: (arg: L.UnionOf<T>) => boolean) => T;

export function take_while_last<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T>) => boolean
): (xs: T) => T;

export function take_while_last(
  x: Placeholder,
  xs: string
): (predicate_fn: (arg: string) => boolean) => string;

export function take_while_last(
  predicate_fn: (arg: string) => boolean
): (xs: string) => string;

export function take_while_last<T extends any[]>(
  predicate_fn: ((arg: L.UnionOf<T> | string) => boolean) | Placeholder,
  xs?: T | string
) {
  return curried2(
    function main(
      predicate_fn: (arg: L.UnionOf<T> | string) => boolean,
      xs: T | string
    ) {
      let last_index = xs.length - 1;
      while (last_index >= 0 && predicate_fn(xs[last_index])) {
        last_index--;
      }
      return xs.slice(last_index, xs.length);
    },
    predicate_fn,
    xs
  );
}
