import { L } from 'ts-toolbelt';
import { partial2 } from './internals/partial2';

/**
 * @description takes a function and an array returns new array containing values from given array from start till predication function returns false.
 */
export function take_while<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T>) => boolean,
  xs: T
): T;
export function take_while<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T>) => boolean
): (xs: T) => T;

export function take_while(
  predicate_fn: (arg: string) => boolean,
  xs: string
): string;

export function take_while(
  predicate_fn: (arg: string) => boolean
): (xs: string) => string;

export function take_while<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T>) => boolean,
  xs?: T | string
) {
  return partial2(
    function main(
      predicate_fn: (arg: L.UnionOf<T>) => boolean,
      xs: T | string
    ) {
      let last_index = 0;
      while (last_index < xs.length && predicate_fn(xs[last_index])) {
        last_index++;
      }
      return xs.slice(0, last_index + 1);
    },
    predicate_fn,
    xs
  );
}
