export function is_function(x: any) {
  return (
    x &&
    (Object.prototype.toString.call(x) === '[object Function]' ||
      typeof x === 'function' ||
      x instanceof Function)
  );
}
