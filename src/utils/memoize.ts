/**
 * @description it takes a function and returns memoized version of that function. argument are cached using `JSON.stringify`.
 * @param fn : function you want to memoize
 * @param arg : argument for that function.
 */

export function memoize<T = undefined, R = void>(fn: (x: T) => R) {
  return function(arg: T) {
    const cache = new Map<string | undefined, R>();
    const arg_stringify = JSON.stringify(arg);
    if (!cache.has(arg_stringify)) {
      const ret_val = fn(arg);
      cache.set(arg_stringify, ret_val);
      return ret_val;
    } else {
      return cache.get(arg_stringify) as R;
    }
  };
}
