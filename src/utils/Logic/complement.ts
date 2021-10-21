import { OvarloadedParameters } from '../types';

/**
 * @description takes an function that returns boolean and returns function that will take the arguments for function we pass as argument and when we call that function it will return complement of function we passed in argument
 * @category Logic
 * @example
 * ```typescript
 * let invertedLessThan30 =  F.complement(F.lt(30));
 * invertedLessThan30(25) // false
 * ```
 */
export function complement<T extends (...args: any[]) => boolean>(fn: T) {
  return function complemented(...args: OvarloadedParameters<T>) {
    return !fn(...args);
  };
}
