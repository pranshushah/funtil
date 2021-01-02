export function flip<T1, T2, T3 extends any[], R>(
  fn: (args2: T2, args1: T1, ...args: T3) => R
): (args1: T1, args2: T2, ...args: T3) => R {
  return function fliped(args1: T1, args2: T2, ...args: T3) {
    return fn(args2, args1, ...args);
  };
}
