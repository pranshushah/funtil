import { partial2 } from './internals/partial2';

/**
 * @returns first n elements an array of from front.
 * @category List
 */
export function take<T extends readonly any[]>(
  number_of_elements_you_want: number,
  xs: T
): T;

export function take(number_of_elements_you_want: number, xs: string): string;

export function take(
  number_of_elements_you_want: number
): { <T extends readonly any[]>(xs: T): T; (xs: string): string };

export function take<T extends readonly any[]>(
  number_of_elements_you_want: number,
  xs?: T | string
) {
  return partial2(
    function main(number_of_elements_you_want: number, xs: T | string) {
      return xs.slice(
        0,
        number_of_elements_you_want < 0
          ? xs.length
          : number_of_elements_you_want
      );
    },
    number_of_elements_you_want,
    xs
  );
}
