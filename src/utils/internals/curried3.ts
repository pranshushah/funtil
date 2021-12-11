import { curried2 } from './curried2';

/**
 * @description partial form for function that takes 3 arguments.
 */
export function curried3<R, T1, T2 = T1, T3 = T2>(
  fn: (x: T1, y: T2, z: T3) => R,
  arg1: T1,
  arg2?: T2,
  arg3?: T3
) {
  if (arg3 !== undefined && arg2 !== undefined) {
    return fn(arg1, arg2, arg3);
  } else if (arg2 !== undefined) {
    return curried2(
      function main(arg2: T2, arg3: T3) {
        return fn(arg1, arg2, arg3);
      },
      arg2,
      arg3
    );
  } else {
    return function take_two_more_args(arg2: T2, arg3?: T3) {
      if (arg3 === undefined) {
        return function take_one_arg(arg3: T3) {
          return fn(arg1, arg2, arg3);
        };
      } else {
        return fn(arg1, arg2, arg3);
      }
    };
  }
}
