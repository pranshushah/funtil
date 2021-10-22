/**
 * @description checks wether given value is object or not.
 * @category Function
 * @example
 * ```typescript
 * F.is_object({id:1}) // true
 * F.is_object([]) // true
 * F.is_object(new Map()) // true
 * F.is_object(null) // true
 * ```
 */
export function is_object(x: any) {
  return typeof x === 'object';
}
