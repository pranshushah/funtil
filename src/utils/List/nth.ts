import { L } from 'ts-toolbelt';
import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';

/**
 * @description returns value of nth index of array or string.if you pass negative index it will convert to it's absolute value.
 * @category List
 * @example
 * ```typescript
 * F.nth(1,[1,2,3,4]) // 2
 * F.nth(-1,[1,2,3,4]) // 2
 * F.nth(9,[1,2,3,4]) // undefined
 * F.nth(2,"pranshu") // 'a'
 * ```
 */
export function nth<T extends any[]>(
  n: number,
  xs: T
): L.UnionOf<T> | undefined;
export function nth<T extends any[]>(
  x: Placeholder,
  xs: T
): (n: number) => L.UnionOf<T> | undefined;
export function nth<T extends any[]>(
  n: number
): (xs: T) => L.UnionOf<T> | undefined;

export function nth(n: number, xs: string): string;
export function nth(x: Placeholder, xs: string): (n: number) => string;
export function nth(n: number): (xs: string) => string;

export function nth<T extends any[]>(n: number | Placeholder, xs?: T | string) {
  return curried2(
    function main(n: number, xs: T | string) {
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
