/**
 * @alias always
 * @description takes an element returns function that always returns element we pass.
 */
export function constant<T>(v: T) {
  return function value() {
    return v;
  };
}
