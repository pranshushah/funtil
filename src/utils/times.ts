import { partial2 } from './internals/partial2';

/**
 * @description Calls an input function n times, returning an array containing the results of those function calls.
 */
export function times<T>(fn: (arg: number) => T, n: number): T[];
export function times<T>(fn: (arg: number) => T): (n: number) => T[];

export function times<T>(fn: (arg: number) => T, n?: number) {
  return partial2(
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
