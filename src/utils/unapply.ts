/**
 * @description takes a function as an argument and returns a function that takes argument for supplied function and call that function with those argument in array form.
 */
export function unapply<F extends (...args: any) => any>(
  fn: F
): (...args: Parameters<F>[]) => ReturnType<F> {
  return function unapplied(...args: Parameters<F>[]) {
    return fn(args);
  };
}
