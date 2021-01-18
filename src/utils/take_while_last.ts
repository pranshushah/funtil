import { L } from 'ts-toolbelt';
import { partial2 } from './internals/partial2';

/**
 * @description takes predication funtion and array and returns new array containg values from behind from given array while predication function returns true.
 */
export function take_while_last<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T>) => boolean,
  xs: T
): T;

export function take_while_last<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T>) => boolean
): (xs: T) => T;

export function take_while_last(
  predicate_fn: (arg: string) => boolean,
  xs: string
): string;

export function take_while_last(
  predicate_fn: (arg: string) => boolean
): (xs: string) => string;

export function take_while_last<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T> | string) => boolean,
  xs?: T | string
) {
  return partial2(
    function main(
      predicate_fn: (arg: L.UnionOf<T> | string) => boolean,
      xs: T | string
    ) {
      let last_index = xs.length - 1;
      while (last_index >= 0 && predicate_fn(xs[last_index])) {
        last_index--;
      }
      return xs.slice(last_index + 1, xs.length);
    },
    predicate_fn,
    xs
  );
}
