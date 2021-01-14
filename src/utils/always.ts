/**
 * @description takes an element returns function that always returns element we pass.
 */
export function always<T>(x: T) {
  return function() {
    return x;
  };
}
