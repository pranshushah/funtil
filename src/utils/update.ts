import { partial3 } from './internals/partial3';

/**
 * @description updates given array at given index with given element and returns new copy of array.
 * @category List
 * @example
 * F.update(2,23,[1,2,3,4,5]) // [1,2,23,4,5]
 * F.update(-1,23,[1,2,3,4,5]) // [1,2,3,4,23]
 * F.update(NaN,23,[1,2,3,4,5]) // [1,2,3,4,23]
 * F.update(9,23,[1,2,3,4,5]) // [1,2,3,4,23]
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
  return partial3(
    function main(n: number, el: T, elements: readonly T[]) {
      let result = elements.slice();
      const index =
        n < 0 || isNaN(n) || n >= result.length ? result.length - 1 : n;
      result[index] = el;
      return result;
    },
    n,
    el,
    elements
  );
}
