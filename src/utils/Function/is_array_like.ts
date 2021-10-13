import { is_function } from './is_function';
import { is_null } from './is_null';
import { is_undefined } from './is_undefined';

/**
 * @description returns `true` for object that has a **length** property.returns false for `function`.
 * @category Function
 * @example
 * F.is_array_like("pranshu") // true
 * function x(){
 *  F.is_array_like(arguments) // true
 * }
 * F.is_array_like({id:1}) // false
 */
export function is_array_like(x: any) {
  return (
    !is_function(x) &&
    !is_null(x) &&
    !is_undefined(x) &&
    typeof x.length === 'number'
  );
}
