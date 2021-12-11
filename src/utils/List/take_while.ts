import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';

/**
 * @description takes a function and an array returns new array containing values from given array from start till predication function returns false.
 * @category List
 */
export function take_while<T>(predicate_fn: (arg: T) => boolean, xs: T[]): T[];
export function take_while<T>(
  x: Placeholder,
  xs: T[]
): (predicate_fn: (arg: T) => boolean) => T[];

export function take_while(
  predicate_fn: (arg: string) => boolean,
  xs: string
): string;

export function take_while(
  x: Placeholder,
  xs: string
): (predicate_fn: (arg: string) => boolean) => string;

//@ts-ignore
export function take_while(
  predicate_fn: (arg: string) => boolean
): (xs: string) => string;

export function take_while<T>(
  predicate_fn: (arg: T) => boolean
): (xs: T[]) => T[];

export function take_while<T>(
  predicate_fn: ((arg: T | string) => boolean) | Placeholder,
  xs?: T[] | string
) {
  return curried2(
    function main(
      predicate_fn: (arg: T | string) => boolean,
      xs: T[] | string
    ) {
      let last_index = 0;
      //@ts-ignore
      while (last_index < xs.length && predicate_fn(xs[last_index])) {
        last_index++;
      }
      return xs.slice(0, last_index + 1);
    },
    predicate_fn,
    xs
  );
}
