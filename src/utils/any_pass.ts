import { Pred } from './types';
/**
 * @description it takes list of predication function and returns the functions that takes arguments for predication function.if you call the return function it returns true if any predication function returns true otherwise it returns false
 * @returns  returns a function that takes arguments for list of predication functions.
 * @category Logic
 * @example
 * F.any_pass([F.lt(33),F.gt(20)])(30) // true;
 * F.any_pass([F.lt(33),F.gt(20)])(35) // true;
 * F.any_pass([F.lt(33),F.gt(35)])(34) // false;
 */
export function any_pass<Args extends any[]>(preds: Pred<Args>[]) {
  return function checker(...args: Args) {
    let result = false;
    for (let index = 0; index < preds.length; index++) {
      if (preds[index](...args)) {
        result = true;
        break;
      }
    }
    return result;
  };
}
