import { filter } from './filter';
import { curried2 } from '../internals/curried2';
import { is_match } from '../Function/is_match';
import { Placeholder } from '../types';

/**
 * @description Looks through each value in the array, returning an array of all the values that matches the key-value pairs listed in matcher.
 * @category List
 * @example
 * ```typescript
 * F. where({ name: "mit" }, [
    { id: 11, name: 'pranshu' },
    { id: 12, name: 'mit' },
    { id: 13, name: 'sanket patel' },
    { id: 14, name: "mit" },
  ]); // [{ id: 12, name: 'mit' },{ id: 14, name: "mit" },]
 * ```
 */
export function where<T extends Record<string | number, any>>(
  matcher: Partial<T>,
  list: T[]
): T[];

export function where<T extends Record<string | number, any>>(
  x: Placeholder,
  list: T[]
): (matcher: Partial<T>) => T[];

export function where<T extends Record<string | number, any>>(
  matcher: T
): (list: Partial<T>[] | Record<string | number, any>) => T[];

export function where<T extends Record<string | number, any>>(
  matcher: Partial<T> | Placeholder,
  list?: T[]
) {
  return curried2(
    function main(matcher: Partial<T>, list: T[]) {
      const filtered = is_match(matcher);
      return filter(filtered, list);
    },
    matcher,
    list
  );
}
