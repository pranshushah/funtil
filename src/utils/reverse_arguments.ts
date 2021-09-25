import { List } from 'ts-toolbelt';

/**
 * @description takes a function an returns function that takes argument for function we passed in reverse and calls that function when we call returned function; also works in partial form.
 * @category Function
 */
export function reverse_arguments<T extends any[], R>(
  fn: (...arg: T) => R
): (...args: List.Reverse<T>) => R {
  return function reversed(...args: List.Reverse<T>) {
    // @ts-ignore
    return fn(...args.reverse());
  };
}
