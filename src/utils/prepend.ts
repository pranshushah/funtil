import { partial2 } from './internals/partial2';

/**
 * @description takes an element and array.adds that element at the start of the array.it returns new copy of array;also works with partial form.
 */
export function prepend<T>(el: T, arr: T[]): T[];
export function prepend<T>(el: T): (arr: T[]) => T[];

export function prepend<T>(el: T, arr?: T[]) {
  return partial2(
    function main(el: T, arr: T[]) {
      return [el, ...arr];
    },
    el,
    arr
  );
}
