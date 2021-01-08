import { partial2 } from './internals/partial2';
export function memoize<T = undefined, R = void>(fn: (x?: T) => R, arg: T): R;
export function memoize<T = undefined, R = void>(
  fn: (x?: T) => R
): (arg: T) => R;

export function memoize<T = undefined, R = void>(fn: (x?: T) => R, arg?: T) {
  return partial2(
    function main(fn: (x?: T) => R, arg: T) {
      const cache = new Map<T | undefined, R>();
      if (arg) {
        if (!cache.has(arg)) {
          cache.set(arg, fn(arg));
        }
        return cache.get(arg) as R;
      } else {
        if (!cache.has(undefined)) {
          cache.set(undefined, fn());
        }
        return cache.get(undefined) as R;
      }
    },
    fn,
    arg
  );
}
