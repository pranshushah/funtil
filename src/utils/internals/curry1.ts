export function curry1<T, R>(fn: (arg: T) => R): (arg: T) => R {
  return function(arg: T) {
    return fn(arg);
  };
}
