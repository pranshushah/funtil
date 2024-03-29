import { is_array } from './is_array';
import { is_map } from './is_map';
import { is_primitive } from './is_primitive';
import { is_set } from './is_set';
/**
 * @description checks wether given value is object or not.returns false for function,array,map,set null and primitive types.
 * @category Function
 * @example
 * ```typescript
 * F.is_object_like({id:1}); // true
 * F.is_object_like(new Map()); // false
 * F.is_object_like([]); // false
 * F.is_object_like(new Set()); // false
 * F.is_object_like(null); // false
 * ```
 */
export function is_object_like(x: any) {
  return (
    typeof x === 'object' &&
    !is_array(x) &&
    !is_primitive(x) &&
    !is_map(x) &&
    !is_set(x)
  );
}
