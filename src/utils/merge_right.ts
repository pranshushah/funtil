import { Merge } from 'Object/_api';
import { partial2 } from './internals/partial2';

/**
 * @description merges two object if key exist in both object it take key-val from 2nd object. also works in partial form.
 * @category Object
 * @example
 * F.merge_right(
    { id: '11', name: 'pranshu shah' },
    { id: '12', task: 'woww' }
  ); // {id:'12',task:"woww",name:"pranshu shah"}
 */
export function merge_right<T1 extends object, T2 extends object>(
  o1: T1,
  o2: T2
): Merge<T2, T1>;

export function merge_right<T1 extends object>(
  o1: T1
): <T2 extends object>(o2: T2) => Merge<T2, T1>;

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
