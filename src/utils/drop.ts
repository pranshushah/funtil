import { partial2 } from './internals/partial2';

/**
 * @description drops any number of elements you want from front of the array or string and returns new copy of or array or string.if you provide number > number of elements in array it  drops all elements and if you provide negative number it will not drop any element.
 */
export function drop<T extends any[]>(n: number, xs: T): T;
export function drop<T extends any[]>(n: number): (xs: T) => T;
export function drop(n: number, xs: string): string;
export function drop(n: number): (xs: string) => string;

export function drop<T extends any[]>(
  number_element_to_drop: number,
  xs?: T | string
) {
  return partial2(
    function main_drop(number_element_to_drop: number, xs: T | string) {
      const start_index =
        Math.sign(number_element_to_drop) === -1 ? 0 : number_element_to_drop;
      return xs.slice(start_index, xs.length);
    },
    number_element_to_drop,
    xs
  );
}
