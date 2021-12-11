import { curried2 } from '../internals/curried2';

/**
 * @description drops any number of elements you want from front of the array or string and returns new copy of or array or string.if you provide number > number of elements in array it  drops all elements and if you provide negative number it will not drop any element.
 * @returns shallow copy with removed elements.
 * @category List
 * @example
 * ```typescript
 * F.drop([1,2,3,4,5,6],3) //[4,5,6]
 * F.drop("pranshu",3) // 'nshu'
 * ```
 */
export function drop<T extends any[]>(n: number, xs: T): T;
export function drop<T extends any[]>(n: number): (xs: T) => T;
export function drop(n: number, xs: string): string;
export function drop(n: number): (xs: string) => string;

export function drop<T extends any[]>(
  number_element_to_drop: number,
  xs?: T | string
) {
  return curried2(
    function main_drop(number_element_to_drop: number, xs: T | string) {
      const start_index =
        Math.sign(number_element_to_drop) === -1 ? 0 : number_element_to_drop;
      return xs.slice(start_index, xs.length);
    },
    number_element_to_drop,
    xs
  );
}
