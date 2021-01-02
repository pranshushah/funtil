export function apply<T extends any[], R>(
  fn: (...args: T) => R
): (arr: T) => R {
  return function applied(arr: T) {
    return fn(...arr);
  };
}
