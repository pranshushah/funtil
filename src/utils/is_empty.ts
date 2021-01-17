import { is_object } from './is_object';
import { equals } from './math/equals';
import { is_array } from './is_array';

/**
 * @description checks for string,array and object whether they are empty or not. returns true of every other data types.
 */
export function is_empty(x: any) {
  if (is_object(x)) {
    return equals(x, {});
  } else if (is_array(x)) {
    return x.length === 0;
  } else if (typeof x === 'string') {
    return x.length === 0;
  } else {
    return true;
  }
}
