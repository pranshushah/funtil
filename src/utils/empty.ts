import { is_array } from './is_array';

/**
 * @description takes object or array or string and returns empty version of given type
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
