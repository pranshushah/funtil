import { is_array } from './is_array';
import { is_function } from './is_function';
/**
 * @description checks wether given value is object or not.returns false for array,function,date and null
 */
export function is_object(x: any) {
  return typeof x === 'object' && !is_function(x) && !is_array(x) && x !== null;
}
