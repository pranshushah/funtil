/**
 * @description checks whether given element is `Map` object.
 * @category Function
 * @example
 * F.is_map(new Map()) // true
 * F.is_map({}) // false
 * F.is_map(new Date()) // false
 * F.is_map(new Set()) // false
 */
export function is_map(x: any) {
  return (
    Object.prototype.toString.call(x) === '[object Map]' && x instanceof Map
  );
}
