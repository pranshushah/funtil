export function memoize<T = undefined, R = void>(fn: (x?: T) => R) {
  return function memoized(arg?: T) {
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
  };
}
