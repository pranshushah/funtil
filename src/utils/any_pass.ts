import { Pred } from './types';
/**
 * @description it takes list of predication function and returns the functions that takes arguments for predication function.if you call the return function it returns true if any predication function returns true otherwise it returns false
 * @param preds list of predication function that takes argument we pass after this argument
 * @returns  returns a function that takes arguments for list of predication functions.
 */
export function any_pass<T extends any[]>(preds: Pred<T>[]) {
  return function checker(...args: T) {
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
