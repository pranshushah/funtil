/**
 * @description it is same as F.compose but order of exection of function is left-right
 * @category Function
 * @example
 * ```typescript
 * 
 * function upper(x: string) {
    return x.toUpperCase();
  }
  const greeting = (first: string, last: string) => first + last;
  F.compose(greeting,upper)("pranshu","shah") //PRANSHUSHAH
 * ```
 */
export function pipe<V extends any[], T1, T2, T3, T4, T5, T6>(
  fn0: (...args: V) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (...args: V) => T5
): (...args: V) => T6;
export function pipe<V extends any[], T1>(
  fn0: (...args: V) => T1
): (...args: V) => T1;
export function pipe<V extends any[], T1, T2>(
  fn0: (...args: V) => T1,
  fn1: (x: T1) => T2
): (...args: V) => T2;
export function pipe<V extends any[], T1, T2, T3>(
  fn0: (...args: V) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3
): (...args: V) => T3;
export function pipe<V extends any[], T1, T2, T3, T4>(
  fn0: (...args: V) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4
): (...args: V) => T4;
export function pipe<V extends any[], T1, T2, T3, T4, T5>(
  fn0: (...args: V) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5
): (...args: V) => T5;

export function pipe<V extends any[]>(...fns: any[]) {
  return function piped(...args: V) {
    var list = [...fns];
    let returnValue = list.shift()(...args);
    while (list.length > 0) {
      // take the first function from the list
      // and execute it
      // @ts-ignore
      returnValue = list.shift()(returnValue);
    }
    return returnValue;
  };
}
