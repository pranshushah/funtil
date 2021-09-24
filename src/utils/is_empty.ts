import { is_object } from './is_object';
import { equals } from './math/equals';
import { is_array_like } from './is_array_like';
import { is_map } from './is_map';
import { is_set } from './is_set';
import { is_null } from './is_null';
import { is_undefined } from './is_undefined';

/**
 * @description checks for string,array and object whether they are empty or not. returns false of every other data types.
 * @category Function
 */
export function is_empty(x: any) {
  if (is_null(x) || is_undefined(x)) {
    return true;
  } else if (is_array_like(x)) {
    return x.length === 0;
  } else if (is_map(x) || is_set(x)) {
    return x.size === 0;
  } else if (is_object(x)) {
    return equals(x, {});
  } else {
    return false;
  }
}
