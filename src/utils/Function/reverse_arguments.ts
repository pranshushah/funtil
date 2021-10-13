import { List } from 'ts-toolbelt';

/**
 * @description takes a function an returns function that takes argument for function we passed in reverse and calls that function when we call returned function; also works in partial form.
 * @category Function
 * @example
 * function logName(name: string, age: number) {
    return `name is ${name} and age is ${age}`;
  }
  F.reverse_arguments(logName)(24,"pranshu") // name is pranshu and age is 24
 */
export function reverse_arguments<T extends any[], R>(
  fn: (...arg: T) => R
): (...args: List.Reverse<T>) => R {
  return function reversed(...args: List.Reverse<T>) {
    // @ts-ignore
    return fn(...args.reverse());
  };
}
