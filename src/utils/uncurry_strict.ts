import { StrictCurry, StrictUnCurry } from './types';
export function uncurry<P extends any[], R>(
  fn: StrictCurry<P, R>
): StrictUnCurry<P, R> {
  return function uncurried(...args: P) {
    let ret: R | any = fn;
    for (let arg of args) {
      ret = ret(arg);
    }
    return ret as R;
  };
}
