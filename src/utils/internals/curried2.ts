/**
 * @description curried2 form for function that takes 2 argument.
 */
export function curried2<R, T1, T2 = T1>(
  fn: (x: T1, y: T2) => R,
  arg1: T1,
  arg2?: T2
) {
  if (arg2 === undefined) {
    return function oneArgumentApplied(arg: T2) {
      return fn(arg1, arg);
    };
  } else {
    return fn(arg1, arg2);
  }
}
