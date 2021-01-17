/**
 * @description cehcks it whether given type is javascript primitive or not. returns true for null.
 */
export function is_primitive(x: any) {
  return x === null || !(typeof x === 'object' || typeof x === 'symbol');
}
