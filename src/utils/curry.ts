import { F } from 'ts-toolbelt';
export function curry<Fn extends F.Function>(
  fn: Fn,
  arity = fn.length
): F.Curry<Fn> {
  // @ts-ignore-start
  return (function next_curried(previous_args: any[]) {
    return function curried(...next_arg: any[]) {
      let args = [...previous_args, ...next_arg];
      if (args.length >= arity) {
        return fn(...args);
      } else {
        return next_curried(args);
      }
    };
  })([]);
  // @ts-ignore-end
}
