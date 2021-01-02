import { List } from 'ts-toolbelt';

export function reverse_arguments<T extends any[], R>(
  fn: (...arg: T) => R
): (...args: List.Reverse<T>) => R {
  return function reversed(...args: List.Reverse<T>) {
    // @ts-ignore
    return fn(...args.reverse());
  };
}
