/**
 * @description checks whether given element is javascript `Set` or not.
 * @category Function
 */
export function is_set(x: any) {
  return (
    Object.prototype.toString.call(x) === '[object Set]' && x instanceof Set
  );
}
