/**
 * @description takes a function and returns the function that takes only first two argument of that function and calls that function
 * @category Function
 */
export function binary<T1, T2, R>(
  fn: (arg1: T1, arg: T2, ...args: any[]) => R
): (arg1: T1, arg: T2) => R {
  return function two(arg1: T1, arg2: T2) {
    return fn(arg1, arg2);
  };
}
