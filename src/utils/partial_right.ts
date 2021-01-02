export function partial_right<T1 extends any[], T2 extends any[], R>(
  fn: (...args: [...T2, ...T1]) => R,
  ...intialArgs: T1
): (...afterargs: T2) => R {
  return function partially_applied(...afterargs: T2) {
    return fn(...afterargs, ...intialArgs);
  };
}
