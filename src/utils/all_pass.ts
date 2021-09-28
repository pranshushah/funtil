import { Pred } from './types';
/**
 * @description it takes list of predication function and returns the functions that takes arguments for predication function.if you call the return function it returns true if all predication function returns true otherwise it returns false
 * @returns  returns a function that takes arguments for list of predication functions.
 * @category Logic
 * @example
 *   all_pass([F.gt(0), F.lt(100)])(33); // true
 *   all_pass([F.lt(11)])(12) //false
 */

export function all_pass<T extends any[]>(preds: Pred<T>[]) {
  return function checker(...args: T) {
    let result = true;
    for (let index = 0; index < preds.length; index++) {
      if (!preds[index](...args)) {
        result = false;
        break;
      }
    }
    return result;
  };
}
