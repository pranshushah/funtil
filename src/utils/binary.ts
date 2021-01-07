export function binary<T1, T2, R>(
  fn: (arg1: T1, arg: T2, ...args: any[]) => R
): (arg1: T1, arg: T2) => R {
  return function two(arg1: T1, arg2: T2) {
    return fn(arg1, arg2);
  };
}
