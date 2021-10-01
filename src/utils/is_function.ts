/**
 * @description check for given element is function or not returns false for object,array and date
 * @category Function
 * @example
 * F.is_function(Array.isArray) // true
 * F.is_function(Array.prototype) // false
 */
export function is_function(x: any) {
  return (
    x &&
    (Object.prototype.toString.call(x) === '[object Function]' ||
      typeof x === 'function' ||
      x instanceof Function)
  );
}
