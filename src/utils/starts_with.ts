import { equals } from './math/equals';
import { partial2 } from './internals/partial2';
import { take } from './take';

/**
 * @description checks if given array has prefix we passed, also works with partial form.
 * @category List
 * @example
 * F.starts_with([1,2],[1,2,3,5]) // true
 * F.starts_with([1,2,4],[1,2,3,5]) // false
 * F.starts_with("pra","pranshu") // true
 * F.starts_with("pa","pranshu") // false
 */
export function starts_with<T extends readonly any[]>(
  prefix: T,
  xs: T
): boolean;
export function starts_with<T extends readonly any[]>(
  prefix: T
): (xs: T) => boolean;
export function starts_with(prefix: string, xs: string): boolean;
export function starts_with(prefix: string): (xs: string) => boolean;

export function starts_with<T extends readonly any[]>(
  prefix: T | string,
  xs?: T | string
) {
  return partial2(
    function main(prefix: T | string, xs: T | string) {
      if (Array.isArray(xs)) {
        return equals(take(prefix.length, xs), prefix);
      } else {
        return equals(take(prefix.length, xs as string), prefix);
      }
    },
    prefix,
    xs
  );
}
