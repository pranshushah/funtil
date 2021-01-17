/**
 * @description check for given element is function or not returns false for object,array and date
 */
export function is_function(x: any) {
  return (
    x &&
    (Object.prototype.toString.call(x) === '[object Function]' ||
      typeof x === 'function' ||
      x instanceof Function)
  );
}
