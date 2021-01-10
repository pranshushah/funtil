import { Merge } from 'Object/_api';
import { partial2 } from './internals/partial2';

export function merge<T1 extends object, T2 extends object>(
  o1: T1,
  o2: T2
): Merge<T1, T2>;

export function merge<T1 extends object, T2 extends object>(
  o1: T1
): (o2: T2) => Merge<T1, T2>;

export function merge<T1 extends object, T2 extends object>(o1: T1, o2?: T2) {
  return partial2(
    function main(o1: T1, o2: T2) {
      return { ...o2, ...o1 } as Merge<T1, T2>;
    },
    o1,
    o2
  );
}
