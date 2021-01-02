export function unapply<T, R>(fn: Function): (...args: T[]) => R {
  return function unapplied(...args: T[]) {
    return fn(args);
  };
}
