/**
 * @description takes a function as an argument and returns a function that takes argument for supplied function and call that function with those argument in array form.
 */
export function unapply<T, R>(fn: Function): (...args: T[]) => R {
  return function unapplied(...args: T[]) {
    return fn(args);
  };
}
