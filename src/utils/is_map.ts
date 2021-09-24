/**
 * @description checks whether given element is `Map` object.
 */
export function is_map(x: any) {
  return (
    Object.prototype.toString.call(x) === '[object Map]' && x instanceof Map
  );
}
