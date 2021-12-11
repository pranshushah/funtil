import { Tail } from 'List/_api';
import { curried2 } from '../internals/curried2';
import { OvarloadedParameters, Placeholder } from '../types';

/**
 * @description tryCatch takes two functions, a tryer and a catcher. The returned function evaluates the tryer; if it does not throw error, it simply returns the result. If the tryer does throw error, the returned function evaluates the catcher function and returns its result.
 * @returns function that takes tuple of array arguments for tryer and catcher.
 * @category Function
 * @example
 * ```typescript
 * function catcher(x: Error) {
 *    return x.message;
 * }
 * let gtWithCatch= F.try_catch(gt,catcher)
 * gtWithCatch([1,2],[]) // true
 * let errorChecker = F.try_catch(function() {
 *  throw Error('error');
 * },catcher)
 * errorChecker() // 'error'
 * ```
 */
export function try_catch<
  F extends (...args: any[]) => any,
  F1 extends (x: Error, ...args: any[]) => any
>(
  tryer: F,
  catcher: F1
): (
  args: [OvarloadedParameters<F>, Tail<OvarloadedParameters<F1>>]
) => ReturnType<F1> | ReturnType<F>;

export function try_catch<F1 extends (x: Error, ...args: any[]) => any>(
  x: Placeholder,
  catcher: F1
): <F extends (...args: any[]) => any>(
  tryer: F
) => (
  args: [OvarloadedParameters<F>, Tail<OvarloadedParameters<F1>>]
) => ReturnType<F1> | ReturnType<F>;

export function try_catch<F extends (...args: any[]) => any>(
  tryer: F
): <F1 extends (x: Error, ...args: any[]) => any>(
  catcher: F1
) => (
  args: [OvarloadedParameters<F>, Tail<OvarloadedParameters<F1>>]
) => ReturnType<F1> | ReturnType<F>;

export function try_catch<
  F extends (...args: any[]) => any,
  F1 extends (x: unknown, ...args: Parameters<F1>) => any
>(tryer: F | Placeholder, catcher?: F1) {
  return curried2(
    function main(tryer: F, catcher: F1) {
      return function(args: [Parameters<F>, Parameters<F1>]) {
        try {
          return tryer(...args[0]);
        } catch (e) {
          return catcher(e, ...args[1]);
        }
      };
    },
    tryer,
    catcher
  );
}
