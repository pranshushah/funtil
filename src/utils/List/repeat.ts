import { always } from '../always';
import { partial2 } from '../internals/partial2';
import { times } from '../times';

/**
 * @description takes and value you want to repeat and how many times you want to repeat and returns an array that contains given repeating given number.also works in partial form.
 * @category List
 * @example
 * F.repeat({ id: 1, name: 'pranshu' },3) [{ id: 1, name: 'pranshu' },{ id: 1, name: 'pranshu' },{ id: 1, name: 'pranshu' }]
 */
export function repeat<T>(value: T, n: number): T[];
export function repeat<T>(value: T): (n: number) => T[];

export function repeat<T>(value: T, n?: number) {
  return partial2(
    function main(value: T, n: number) {
      return times(always(value), n);
    },
    value,
    n
  );
}
