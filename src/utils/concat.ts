import { partial2 } from './internals/partial2';

export function concat<T extends any[]>(arg1: T, arg2: T): T;
export function concat<T extends any[]>(arg1: T): (arg2: T) => T;
export function concat(arg1: string): (arg2: string) => string;
export function concat(arg1: string, arg2: string): string;

export function concat<T extends any[]>(arg1: T | string, arg2?: T | string) {
  return partial2(
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
