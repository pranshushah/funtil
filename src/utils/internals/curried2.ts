/**
 * @description curried2 form for function that takes 2 argument.
 */

import { __ } from '../constant/constant';
import { Placeholder } from '../types';

export function curried2<R, T1, T2 = T1>(
  fn: (x: T1, y: T2) => R,
  arg1: T1 | Placeholder,
  arg2?: T2
) {
  if (arg2 === undefined && arg1 !== __) {
    return function oneArgumentApplied(arg: T2) {
      return fn(arg1, arg);
    };
  } else if (arg1 === __ && arg2 !== undefined) {
    return function getFirstArgument(arg: T1) {
      return fn(arg, arg2);
    };
  } else {
    // @ts-ignore
    return fn(arg1, arg2);
  }
}
