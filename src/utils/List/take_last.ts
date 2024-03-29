import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';

/**
 * @description returns a new list with n numbers from behind.
 * @category List
 * @example
 * ```typescript
 * F.take_last(3,[1,2,3,4,5]) // [3,4,5]
 * F.take_last(3,"pranshu") // "shu"
 * ```
 */
export function take_last<T extends any[]>(
  number_elements_you_want_from_behind: number,
  xs: T
): T;

export function take_last<T extends any[]>(
  x: Placeholder,
  xs: T
): (number_elements_you_want_from_behind: number) => T;

export function take_last<T>(
  number_elements_you_want_from_behind: number,
  xs: string
): string;

export function take_last<T>(
  x: Placeholder,
  xs: string
): (number_elements_you_want_from_behind: number) => string;

export function take_last(
  number_elements_you_want_from_behind: number
): { <T extends any[]>(xs: T): T; (xs: string): string };

export function take_last<T extends any[]>(
  number_elements_you_want_from_behind: number | Placeholder,
  xs?: T | string
) {
  return curried2(
    function main(
      number_elements_you_want_from_behind: number,
      xs: T | string
    ) {
      let first_index: number;
      if (
        number_elements_you_want_from_behind < 0 ||
        xs.length - number_elements_you_want_from_behind <= 0
      ) {
        first_index = 0;
      } else {
        first_index = xs.length - number_elements_you_want_from_behind;
      }

      if (Array.isArray(xs)) {
        return xs.slice(first_index, xs.length);
      } else {
        return xs.slice(first_index, xs.length);
      }
    },
    number_elements_you_want_from_behind,
    xs
  );
}
