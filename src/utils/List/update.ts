import produce from 'immer';
import { curried3 } from '../internals/curried3';

/**
 * @description updates given array at given index with given element and returns new copy of array.
 * @category List
 * @example
 * ```typescript
 * F.update(2,23,[1,2,3,4,5]) // [1,2,23,4,5]
 * F.update(-1,23,[1,2,3,4,5]) // [1,2,3,4,23]
 * F.update(NaN,23,[1,2,3,4,5]) // [1,2,3,4,23]
 * F.update(9,23,[1,2,3,4,5]) // [1,2,3,4,23]
 * ```
 */
export function update<T>(n: number, el: T, elements: readonly T[]): T[];
export function update<T>(n: number, el: T): (elements: readonly T[]) => T[];
export function update(
  n: number
): {
  <T>(el: T, elements: readonly T[]): T[];
  <T>(el: T): (elements: readonly T[]) => T[];
};

export function update<T>(n: number, el?: T, elements?: readonly T[]) {
  return curried3(
    function main(n: number, el: T, elements: readonly T[]) {
      return produce(elements, (draft: T[]) => {
        const index =
          n < 0 || isNaN(n) || n >= draft.length ? draft.length - 1 : n;
        draft[index] = el;
      });
    },
    n,
    el,
    elements
  );
}
