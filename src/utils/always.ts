/**
 * @description takes an element returns function that always returns element we pass.
 * @param x element you want return when you call the function.
 * @returns function that always returns elements we pass in argument.
 */
export function always<T>(x: T) {
  return function() {
    return x;
  };
}
