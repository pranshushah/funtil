import { partial2 } from './internals/partial2';

export function nth<T>(n: number, xs: T[]): T | undefined;
export function nth(n: number, xs: string): string;

export function nth<T>(n: number, xs?: T[] | string) {
  return partial2(
    function main(n: number, xs: T[] | string) {
      const index = Math.abs(n);
      if (Array.isArray(xs)) {
        return xs[index];
      } else {
        return xs.charAt(index);
      }
    },
    n,
    xs
  );
}
