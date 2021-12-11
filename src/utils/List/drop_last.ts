import { curried2 } from '../internals/curried2';
/**
 * @description drops any number of elements you want from back array or string and returns new copy of or array or string.if you provide number > number of elements in array it does not drop any element and if you provide negative number it will not drop any element.
 * @category List
 * @example
 * ```typescript
 * F.drop_last([1,2,3,4,5,6],3) //[1,2,3]
 * F.drop_last("pranshu",3) // 'pran'
 * ```
 */
export function drop_last<T extends any[]>(
  number_element_to_drop_from_back: number,
  xs: T
): T;
export function drop_last<T extends any[]>(
  number_element_to_drop_from_back: number
): (xs: T) => T;
export function drop_last(
  number_element_to_drop_from_back: number,
  xs: string
): string;

export function drop_last(
  number_element_to_drop_from_back: number
): (xs: string) => string;

export function drop_last<T extends any[]>(
  number_element_to_drop_from_back: number,
  xs?: T | string
) {
  return curried2(
    function main_drop_last(
      number_element_to_drop_from_back: number,
      xs: T | string
    ) {
      const last_index =
        xs.length - number_element_to_drop_from_back < 0
          ? 0
          : xs.length - number_element_to_drop_from_back;
      return xs.slice(0, last_index);
    },
    number_element_to_drop_from_back,
    xs
  );
}
