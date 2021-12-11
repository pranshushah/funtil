import produce from 'immer';
import { Merge } from 'Object/_api';
import { curried2 } from '../internals/curried2';
/**
 * @description merges two object if key exists in both object it takes key-val of first pair.also works in partial form
 * @category Object
 * @example
 * ```typescript
 * F.merge_left(
    { id: '11', name: 'pranshu shah' },
    { id: '12', task: 'woww' }
  ); // {id:"11",name:"pranshu shah",task:'woww'}
 * ```
 */
export function merge_left<T1 extends object, T2 extends object>(
  o1: T1,
  o2: T2
): Merge<T1, T2>;

export function merge_left<T1 extends object>(
  o1: T1
): <T2 extends object>(o2: T2) => Merge<T1, T2>;

export function merge_left<T1 extends object, T2 extends object>(
  o1: T1,
  o2?: T2
) {
  return curried2(
    function main(o1: T1, o2: T2) {
      return produce(o2, (draft: any) => {
        Object.entries(o1).forEach(([key, val]) => {
          draft[key] = val;
        });
      }) as Merge<T1, T2>;
    },
    o1,
    o2
  );
}
