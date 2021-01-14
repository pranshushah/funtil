import { partial3 } from './internals/partial3';

export function slice<T extends readonly any[]>(
  from_index: number,
  to_index: number,
  xs: T
): T;

export function slice<T extends readonly any[]>(
  from_index: number,
  to_index: number
): (xs: T) => T;

export function slice<T extends readonly any[]>(
  from_index: number
): { (to_index: number, xs: T): T; (to_index: number): (xs: T) => T };

export function slice(from_index: number, to_index: number, xs: string): string;

export function slice(
  from_index: number,
  to_index: number
): (xs: string) => string;

export function slice(
  from_index: number
): {
  (to_index: number, xs: string): string;
  (to_index: number): (xs: string) => string;
};

export function slice<T extends readonly any[]>(
  from_index: number,
  to_index?: number,
  xs?: T | string
) {
  return partial3(
    function main(from_index: number, to_index: number, xs: T | string) {
      return xs.slice(from_index, to_index);
    },
    from_index,
    to_index,
    xs
  );
}
