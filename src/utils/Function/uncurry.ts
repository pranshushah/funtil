import { F } from 'ts-toolbelt';

/**
 * @description uncurries F.curry.
 * @category Function
 * @example
 * ```typescript
 * const addFour = a => b => c => d => a + b + c + d;
 * const uncurriedAddFour = F.uncurry(addFour);
 * uncurriedAddFour(1, 2, 3, 4); //=> 10
 * ```
 */
export function uncurry<F1 extends F.Function>(fn: F.Curry<F1>): F.UnCurry<F1> {
  // @ts-ignore-start
  return function uncurried(...args: any[]) {
    let ret: any = fn;
    for (let arg of args) {
      ret = ret(arg);
    }
    return ret;
  };
  // @ts-ignore-end
}
