import { always } from './always';
import { partial2 } from './internals/partial2';
import { times } from './times';

export function repeat<T>(value: T, n?: number) {
  return partial2(
    function main(value: T, n: number) {
      return times(always(value), n);
    },
    value,
    n
  );
}
