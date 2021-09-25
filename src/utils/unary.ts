import { OvarloadedParameters, OverloadedReturnType, Head } from './types';

/**
 * @description returns the function that will call the supplied function with only first argument we passed.
 * @category Function
 */
export function unary<T extends (...args: any[]) => any>(
  fn: T
): (arg: Head<OvarloadedParameters<T>>) => OverloadedReturnType<T> {
  return function one(arg: Head<OvarloadedParameters<T>>) {
    return fn(arg);
  };
}
