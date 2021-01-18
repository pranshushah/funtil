/**
 * @description returns the function that will call supplied function with only first argument.
 */
export function unary<T extends any[], R>(
  fn: (arg: T, ...args: readonly any[]) => R
): (arg: T) => R {
  return function one(arg: T) {
    return fn(arg);
  };
}
