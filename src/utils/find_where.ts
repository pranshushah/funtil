import { find } from './find';
import { partial2 } from './internals/partial2';
import { is_match } from './is_match';

/**
 *
 * @category List
 */

export function find_where<T extends Record<string | number, any>>(
  matcher: Partial<T>
): (list: T[]) => T;

export function find_where<T extends Record<string | number, any>>(
  matcher: Partial<T>,
  list: T[]
): T;

export function find_where<T extends Record<string | number, any>>(
  matcher: Partial<T>,
  list?: T[]
) {
  return partial2(
    function main(matcher: Partial<T>, list: T[]) {
      const found = is_match(matcher);
      return find(found, list);
    },
    matcher,
    list
  );
}
