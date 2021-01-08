export function is_primitive(x: any) {
  return x === null || !(typeof x === 'object' || typeof x === 'symbol');
}
