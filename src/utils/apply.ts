import { partial2 } from './internals/partial2';

/**
 *@description takes a function and array of arguments and spread that arguments into function we passed,  also works on parital form
 */

export function apply<T extends any[], R>(fn: (...args: T) => R, arr: T): R;
export function apply<T extends any[], R>(fn: (...args: T) => R): (arr: T) => R;

export function apply<T extends any[], R>(fn: (...args: T) => R, arr?: T) {
  return partial2(
    function main(fn, arr) {
      return fn(...arr);
    },
    fn,
    arr
  );
}
