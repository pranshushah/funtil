import { partial2 } from './internals/partial2';

export function join<T>(s: string, arr: T[]): string;
export function join<T>(s: string): (arr: T[]) => string;

export function join<T>(s: string, arr?: T[]) {
  return partial2(
    function main(s: string, arr: T[]) {
      return arr.join(s);
    },
    s,
    arr
  );
}
