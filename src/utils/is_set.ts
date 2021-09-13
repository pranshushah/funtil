export function is_set(x: any) {
  return (
    Object.prototype.toString.call(x) === '[object Set]' && x instanceof Set
  );
}
