export function is_map(x: any) {
  return (
    Object.prototype.toString.call(x) === '[object Map]' && x instanceof Map
  );
}
