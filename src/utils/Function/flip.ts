/**
 * @description returns a function that invokes the function with first two arguments fipped
 * @category Function
 * @example
 * ```typescript
 * let flippedConcat = F.flip(F.concat);
 * flippedConcat("pranshu","shah") //shahpranshu
 * ```
 */
export function flip<T1, T2, T3 extends any[], R>(
  fn: (args2: T2, args1: T1, ...args: T3) => R
): (args1: T1, args2: T2, ...args: T3) => R {
  return function fliped(args1: T1, args2: T2, ...args: T3) {
    return fn(args2, args1, ...args);
  };
}
