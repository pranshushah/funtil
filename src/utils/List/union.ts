import { concat } from './concat';
import { partial2 } from '../internals/curried2';
import { unique } from './unique';

/**
 * @description it returns unioun of given two arrays.
 * @category List
 * @example
 * ```typescript
 * F.union([{ id: 1, name: 'pranshu' },{ id: 2, name: 'mit' },{ id: 3, name: 'sanket' }],
    [{ id: 1, name: 'pranshu' },{ id: 5, name: 'harsh' }]); 
    // [{ id: 1, name: 'pranshu' },{ id: 2, name: 'mit' },{ id: 3, name: 'sanket' },{ id: 5, name: 'harsh' }]
 * ```
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
