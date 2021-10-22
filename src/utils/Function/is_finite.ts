/**
 * wrapper around  [Number.isFinite()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)
 * @category Function
 * @example
 * ```typescript
 * F.is_finite(10) // true
 * F.is_finite(0/0) // false
 * F.is_finite(1/0) // false
 * ```
 */
export function is_finite(x: any) {
  return Number.isFinite(x);
}
