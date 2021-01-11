import { Merge } from 'Object/_api';
import { partial2 } from './internals/partial2';

export function merge_right<T1 extends object, T2 extends object>(
  o1: T1,
  o2: T2
): Merge<T2, T1>;

export function merge_right<T1 extends object, T2 extends object>(
  o1: T1
): (o2: T2) => Merge<T2, T1>;

export function merge_right<T1 extends object, T2 extends object>(
  o1: T1,
  o2?: T2
) {
  return partial2(
    function main(o1: T1, o2: T2) {
      return { ...o1, ...o2 } as Merge<T2, T1>;
    },
    o1,
    o2
  );
}