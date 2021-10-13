import { partial2 } from '../internals/partial2';
import { OvarloadedParameters, OverloadedReturnType } from '../types';

/**
 *@description takes a function and array of arguments and spread that arguments into function we passed, also works in parital form
 *@returns return value of the function.
 *@category List
 *@example
 * let array_min = F.apply(Math.min);
 * array_min([1,2,3,-1]) // -1
 */

export function apply<Function extends (...args: any[]) => any>(
  fn: Function,
  arr: OvarloadedParameters<Function>
): OverloadedReturnType<Function>;
export function apply<Function extends (...args: any[]) => any>(
  fn: Function
): (arr: OvarloadedParameters<Function>) => OverloadedReturnType<Function>;

export function apply<
  Function extends (...args: any[]) => any,
  P extends OvarloadedParameters<Function>
>(fn: Function, arr?: P) {
  return partial2(
    function main(fn, arr) {
      return fn(...arr);
    },
    fn,
    arr
  );
}
