import { find } from './find';
import { curried2 } from '../internals/curried2';
import { is_match } from '../Function/is_match';
import { Placeholder } from '../types';

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
  x: Placeholder,
  list: T[]
): (matcher: Partial<T>) => T;

export function find_where<T extends Record<string | number, any>>(
  matcher: Partial<T> | Placeholder,
  list?: T[]
) {
  return curried2(
    function main(matcher: Partial<T>, list: T[]) {
      const found = is_match(matcher);
      return find(found, list);
    },
    matcher,
    list
  );
}
