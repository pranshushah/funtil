import { filter } from './filter';
import { partial2 } from './internals/partial2';
import { is_match } from './is_match';

/**
 * @description Looks through each value in the array, returning an array of all the values that matches the key-value pairs listed in matcher.
 */
export function where<T extends Record<string | number, any>>(
  matcher: Partial<T>,
  list: T[]
): T[];

export function where<T extends Record<string | number, any>>(
  matcher: Partial<T>
): (list: T[]) => T[];

export function where<T extends Record<string | number, any>>(
  matcher: Partial<T>,
  list?: T[]
) {
  return partial2(
    function main(matcher: Partial<T>, list: T[]) {
      const filtered = is_match(matcher);
      return filter(filtered, list);
    },
    matcher,
    list
  );
}
