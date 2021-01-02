import { StrictCurry, Head } from './types';
export function curry<P extends any[], R>(
  fn: (...args: P) => R,
  arity = fn.length
): StrictCurry<P, R> {
  // @ts-ignore-start
  return (function next_curried(previous_args: any[]) {
    return function curried(next_arg: Head<P>) {
      let args = [...previous_args, next_arg];
      if (args.length >= arity) {
        return fn(...(args as P));
      } else {
        return next_curried(args);
      }
    };
  })([]);
  // @ts-ignore-end
}
