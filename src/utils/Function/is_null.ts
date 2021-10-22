/**
 * @description wrapper around  `x === null`
 * @category Function
 * @example
 * ```typescript
 * F.is_null(null) // true
 * F.is_null(undefined) // false
 * F.is_null({}) // false
 * ```
 *
 */
export function is_null(x: any) {
  return x === null;
}
