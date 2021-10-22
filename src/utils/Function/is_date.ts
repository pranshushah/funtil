/**
 * @description checks weather given element is date or not.
 * @category Function
 * @example
 * ```typescript
 * F.is_date(new Date()) // true
 * F.is_date({}) // false
 * ```
 */
export function is_date(x: any) {
  return x instanceof Date && x.getTime();
}
