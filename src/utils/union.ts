import { concat } from './concat';
import { partial2 } from './internals/partial2';
import { unique } from './uniq';

/**
 * @description it returns unioun of given two arrays.
 */
export function union<T extends any[]>(x1: T, x2: T): T;
export function union<T extends any[]>(x1: T): (x2: T) => T;

export function union<T extends any[]>(x1: T, x2?: T) {
  return partial2(
    function main(x1: T, x2: T) {
      let result = concat(x1, x2);
      return unique(result) as T;
    },
    x1,
    x2
  );
}
