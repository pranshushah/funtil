import { curried2 } from '../internals/curried2';

/**
 * @description Calls an input function n times, returning an array containing the results of those function calls.
 * @category Function
 * @example
 * ```typescript
 * F.times(gt(3),5) // [false,false,false,false,true]
 *
 * ```
 */
export function times<T>(fn: (arg: number) => T, n: number): T[];
export function times<T>(fn: (arg: number) => T): (n: number) => T[];

export function times<T>(fn: (arg: number) => T, n?: number) {
  return curried2(
    function main(fn: (arg: number) => T, n: number) {
      let result: T[] = [];
      const length = isFinite(n) && !isNaN(n) ? Math.abs(n) : 0;
      for (let index = 0; index < length; index++) {
        result.push(fn(index));
      }
      return result;
    },
    fn,
    n
  );
}
