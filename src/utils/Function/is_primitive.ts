import { is_function } from './is_function';
import { is_object } from './is_object';

/**
 * @description cehcks it whether given type is javascript primitive or not.generally type of null is object which very wellknown bug in javascript but here it returns true for null.
 * @category Function
 * @example
 * F.is_primitive(null) // true
 * F.is_primitive("pranshu") // true
 * F.is_primitive(33) // true
 * F.is_primitive(undefined) // true
 * F.is_primitive({}) // false
 * F.is_primitive([]) // false
 * F.is_primitive(()=>{}) // false
 */
export function is_primitive(x: any) {
  return !(is_object(x) || is_function(x)) || x == null;
}
