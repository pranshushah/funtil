/**
 * @alias always
 * @description takes an element returns function that always returns element we pass.
 * @category Function
 */
export function constant<T>(v: T) {
  return function value() {
    return v;
  };
}
