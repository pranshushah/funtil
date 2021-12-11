import { partial3 } from '../internals/curried3';
import produce, { castDraft } from 'immer';

/**
 * @description this function takes index,function and array as an argument.then passes the element at given index to the function and return value is set as new value at given index in array.
 * @returns new copy of array with function applied at given index
 * @category List
 * @example
 * ```typescript
 * F.adjust(3,F.negate,[1,2,3,4]) // => [1,2,3,-4]
 *
 *  const arrayGetter = F.adjust(3,F.negate);
 *  arrayGetter([1,2])  // => [1,-2]
 *
 *  const functionAndArrayGetter = F.adjust(-1);
 *  functionAndArrayGetter(F.negate,[1,2,3]); // => [1,2,-3]
 *
 * ```
 */
export function adjust<T>(
  index: number,
  fn: (arg: T) => T,
  arr: readonly T[]
): T[];

export function adjust<T>(
  index: number,
  fn: (arg: T) => T
): (arr: readonly T[]) => T[];

export function adjust(
  index: number
): {
  <T>(fn: (arg: T) => T, arr: readonly T[]): T[];
  <T>(fn: (arg: T) => T): (arr: readonly T[]) => T[];
};
export function adjust<T>(
  index: number,
  fn?: (arg: T) => T,
  arr?: readonly T[]
) {
  return partial3(
    function main(index: number, fn: (arg: T) => T, arr: readonly T[]) {
      return produce(arr, draft => {
        const main_index =
          index >= draft.length || index < 0 ? draft.length - 1 : index;
        draft[main_index] = castDraft(fn(arr[main_index]));
      });
    },
    index,
    fn,
    arr
  );
}
