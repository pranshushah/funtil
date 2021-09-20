/**
 * @description takes upto 6 functions as argument and returns the function that will take arguments of right-most function and it will call functions right-left.every functions except right most function should have only one parameter.
 */
export function compose<V extends any[], T1, T2, T3, T4, T5, T6>(
  fn5: (x: T5) => T6,
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (...args: V) => T1
): (...args: V) => T6;
export function compose<V extends any[], T1>(
  fn0: (...args: V) => T1
): (...args: V) => T1;
export function compose<V extends any[], T1, T2>(
  fn1: (x: T1) => T2,
  fn0: (...args: V) => T1
): (...args: V) => T2;
export function compose<V extends any[], T1, T2, T3>(
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (...args: V) => T1
): (...args: V) => T3;
export function compose<V extends any[], T1, T2, T3, T4>(
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (...args: V) => T1
): (...args: V) => T4;
export function compose<V extends any[], T1, T2, T3, T4, T5>(
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (...args: V) => T1
): (...args: V) => T5;

export function compose<V extends any[]>(...fns: any[]) {
  return function composed(...args: V) {
    // copy the array of functions
    var list = [...fns];
    var retValue = list.pop()(...args);
    while (list.length > 0) {
      // take the last function off the end of the list
      // and execute it
      retValue = list.pop()(retValue);
    }

    return retValue;
  };
}
