import { partial3 } from './internals/partial3';

/**
 * @description updates given array at given index with given element and returns new copy of array.
 */
export function update<T>(n: number, el: T, elements: readonly T[]): T[];
export function update<T>(n: number, el: T): (elements: readonly T[]) => T[];
export function update<T>(
  n: number
): {
  (el: T, elements: readonly T[]): T[];
  (el: T): (elements: readonly T[]) => T[];
};

export function update<T>(n: number, el?: T, elements?: readonly T[]) {
  return partial3(
    function main(n: number, el: T, elements: readonly T[]) {
      let result = elements.slice();
      const index =
        n < 0 || !isNaN(n) || n >= result.length ? result.length - 1 : n;
      result[index] = el;
      return result;
    },
    n,
    el,
    elements
  );
}
