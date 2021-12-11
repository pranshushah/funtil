import { curried2 } from '../internals/curried2';
import { equals } from '../math/equals';

/**
 * @description Tells you if the keys and values in matcher are present in obj.
 * @category Function
 */
export function is_match<T extends Record<string | number, any>>(
  matcher: Partial<T>,
  obj: T
): boolean;

export function is_match<T extends Record<string | number, any>>(
  matcher: Partial<T>
): (obj: T) => boolean;

export function is_match<T extends Record<string | number, any>>(
  matcher: Partial<T>,
  obj?: T
) {
  return curried2(
    function main(matcher: Partial<T>, obj: T) {
      if (obj === null || matcher === null) {
        return false;
      } else {
        let keys = Object.keys(matcher);
        let result = true;
        for (const key of keys) {
          if (!(equals(obj[key], matcher[key]) && key in obj)) {
            result = false;
            break;
          }
        }
        return result;
      }
    },
    matcher,
    obj
  );
}
