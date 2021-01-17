import equals from 'fast-deep-equal';
import { partial2 } from './internals/partial2';

/**
 * @description Tells you if the keys and values in matcher are present in obj.
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
  return partial2(
    function main(matcher: Partial<T>, obj: T) {
      if (obj === null || matcher === null) {
        return false;
      } else {
        let keys = Object.keys(obj);
        let result = true;
        for (let key in keys) {
          if (!equals(obj[key], matcher[key]) || !(key in obj)) {
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
