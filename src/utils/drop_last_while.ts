import { partial2 } from './internals/partial2';
import { L } from 'ts-toolbelt';
export function drop_last_while<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T>) => boolean,
  xs: T
): T;
export function drop_last_while<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T>) => boolean
): T;
export function drop_last_while(
  predicate_fn: (arg: string) => boolean,
  xs: string
): string;

export function drop_last_while(
  predicate_fn: (arg: string) => boolean
): (xs: string) => string;

export function drop_last_while<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T> | string) => boolean,
  xs?: T | string
) {
  return partial2(
    function main_drop_last_while(
      predicate_fn: (arg: L.UnionOf<T> | string) => boolean,
      xs: T | string
    ) {
      let last_index = xs.length - 1;
      while (last_index >= 0 && predicate_fn(xs[last_index])) {
        last_index--;
      }
      return xs.slice(0, last_index + 1);
    },
    predicate_fn,
    xs
  );
}
