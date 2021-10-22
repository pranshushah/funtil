import { is_array } from './is_array';

/**
 * @description takes object or array or string and returns empty version of given type
 * @category Function
 * @example
 * ```typescript
 * F.empty([1,2,3]) // []
 * F.empty('pranshu') // ''
 * F.empty(33) // {}
 * ```
 */

export function empty(x: object | any[] | string) {
  if (is_array(x)) {
    return [];
  } else if (typeof x === 'string') {
    return '';
  } else {
    return {};
  }
}
