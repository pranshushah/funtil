export function partial<
  T1 extends readonly any[],
  T2 extends readonly any[],
  R
>(
  fn: (...args: [...T1, ...T2]) => R,
  ...intialArgs: T1
): (...afterargs: T2) => R {
  return function partially_applied(...afterargs: T2) {
    return fn(...intialArgs, ...afterargs);
  };
}
