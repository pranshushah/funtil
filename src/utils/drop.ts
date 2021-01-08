import { partial2 } from './internals/partial2';

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
