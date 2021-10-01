/**
 * @description checks whether given element is javascript `Set` or not.
 * @category Function
 * @example
 * F.is_set(new Set()) // true
 * F.is_set({}) // false
 * F.is_set(new Date()) // false
 * F.is_set(new Map()) // false
 */
export function is_set(x: any) {
  return (
    Object.prototype.toString.call(x) === '[object Set]' && x instanceof Set
  );
}
