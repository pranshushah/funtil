import produce from 'immer';
import { Merge } from 'Object/_api';
import { curried2 } from '../internals/curried2';

/**
 * @description merges two object if key exist in both object it take key-val from 2nd object. also works in partial form.
 * @category Object
 * @example
 * ```typescript
 * F.merge_right(
    { id: '11', name: 'pranshu shah' },
    { id: '12', task: 'woww' }
  ); // {id:'12',task:"woww",name:"pranshu shah"}
 * ```
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
  return curried2(
    function main(o1: T1, o2: T2) {
      return produce(o1, (draft: any) => {
        Object.entries(o2).forEach(([key, val]) => {
          draft[key] = val;
        });
      }) as Merge<T2, T1>;
    },
    o1,
    o2
  );
}
