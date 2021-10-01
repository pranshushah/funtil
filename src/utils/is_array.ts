/**
 * @description wrpper around [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
 * @category Function
 * @example
 * F.is_array([1,2]) // true
 * F.is_array("pranshu") // false
 * F.is_array({}) // false
 * F.is_array(undefined) // false
 */
export function is_array(x: any) {
  return Array.isArray(x);
}
