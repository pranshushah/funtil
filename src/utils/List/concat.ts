import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';

/**
 * @description take two element. that can be either string or array and returns the concated version.it will throw error if we pass one string and one array.it also take partial arguments
 * @returns new string or array.
 * @category List
 * @example
 * ```typescript
 * F.concat([1,2],[3,4]) // [1,2,3,4]
 * F.concat("pranshu ","shah") // "pranshu shah"
 * ```
 */

export function concat<T extends readonly any[]>(
  x: Placeholder,
  arg2: T
): (arg1: T) => T;
export function concat<T extends readonly any[]>(arg1: T, arg2: T): T;
export function concat<T extends readonly any[]>(arg1: T): (arg2: T) => T;
export function concat<T extends readonly any[]>(x: Placeholder, arg2: T): T;
export function concat(arg1: string): (arg2: string) => string;
export function concat(arg1: string, arg2: string): string;
export function concat(x: Placeholder, arg2: string): (arg1: string) => string;

export function concat<T extends readonly any[]>(
  arg1: T | string | Placeholder,
  arg2?: T | string
) {
  return curried2(
    function main_concat(arg1: T | string, arg2: T | string) {
      let return_val: T;
      if (Array.isArray(arg1) && Array.isArray(arg2)) {
        // @ts-ignore
        return_val = arg1.concat(arg2);
      } else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        // @ts-ignore
        return_val = arg1 + arg2;
      } else {
        throw Error(
          'both argument should have same type it can be either array or string'
        );
      }
      return return_val;
    },
    arg1,
    arg2
  );
}
