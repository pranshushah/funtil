/**
 * @description takes a function and its argument. it calls given function and returns the argument.
 */
export function tap<T>(fn: (arg: T) => any, x: T) {
  fn(x);
  return x;
}
