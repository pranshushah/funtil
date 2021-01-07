import { partial2 } from './internals/partial2';

export function map<T, R extends (val: T, index?: number, arr?: T[]) => any>(
  mapper: R,
  arr?: T[]
) {
  return partial2(
    function map(mapper: R, arr: T[]) {
      return arr.flatMap(mapper);
    },
    mapper,
    arr
  );
}
