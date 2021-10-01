/**
 * @description wrapper around `x === undefined`
 * @category Function
 * @example
 * F.is_undefined(undefined) // true
 * F.is_undefined(null) // false
 * F.is_undefined({}) // false
 * F.is_undefined([]) // false
 * F.is_undefined(22) // false
 * F.is_undefined("pranshu") // false
 *
 */
export function is_undefined(x: any) {
  return x === undefined;
}
