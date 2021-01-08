import deep_equal from 'fast-deep-equal';
import { partial2 } from './internals/partial2';

export function includes<T = any>(target: T, source: T[]): boolean;
export function includes<T = any>(target: T): (source: T[]) => boolean;

export function includes<T = any>(target: T, source?: T[]) {
  return partial2(
    function main_contains(target: T, source: T[]) {
      let ret_val: boolean = false;
      if (
        typeof target === 'bigint' ||
        typeof target === 'boolean' ||
        typeof target === 'number' ||
        typeof target === 'string' ||
        typeof target === 'undefined' ||
        target === null
      ) {
        ret_val = source.includes(target);
      } else {
        for (let index = 0; index < source.length; index) {
          if (deep_equal(target, source[index])) {
            ret_val = true;
            break;
          }
        }
      }
      return ret_val;
    },
    target,
    source
  );
}
