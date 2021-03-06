import { take_last } from './take_last';
import { equals } from './math/equals';
import { partial2 } from './internals/partial2';

/**
 * @description checks if given list ends with provided sublist. it uses F.equals
 */

export function ends_with<T extends any[]>(suffix: T, xs: T): boolean;
export function ends_with<T extends any[]>(suffix: T): (xs: T) => boolean;

export function ends_with(suffix: string, xs: string): boolean;
export function ends_with(suffix: string): (xs: string) => boolean;

export function ends_with<T extends any[]>(
  suffix: T | string,
  xs?: T | string
) {
  return partial2(
    function main_ends_with(suffix: T | string, xs: T | string) {
      if (Array.isArray(xs)) {
        return equals(take_last(suffix.length, xs), suffix);
      } else {
        return equals(take_last(suffix.length, xs), suffix);
      }
    },
    suffix,
    xs
  );
}
