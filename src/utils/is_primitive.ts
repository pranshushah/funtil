/**
 * @description cehcks it whether given type is javascript primitive or not.generally type of null is object which very wellknown bug in javascript but here it returns true for null.
 */
export function is_primitive(x: any) {
  return x === null || !(typeof x === 'object' || typeof x === 'symbol');
}
