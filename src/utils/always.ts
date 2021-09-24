/**
 * @description takes an element returns function that always returns element we pass.
 * @category Function
 */
export function always<T>(x: T) {
  return function() {
    return x;
  };
}
