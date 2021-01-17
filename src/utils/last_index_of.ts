import { partial2 } from './internals/partial2';
import { equals } from './math/equals';

/**
 * @description returns last index of given element in array.returns -1 if no element is found.uses ```F.equals``` , also works with partial form.
 */
export function last_index_of<T>(item: T, arr: readonly T[]): number;
export function last_index_of<T>(item: T): (arr: readonly T[]) => number;

export function last_index_of<T>(item: T, arr?: readonly T[]) {
  return partial2(
    function main(item: T, arr: readonly T[]) {
      let return_index = -1;
      const compare = equals(item);
      for (let index = 0; index < arr.length; index++) {
        if (compare(arr[index])) {
          return_index = index;
        }
      }
      return return_index;
    },
    item,
    arr
  );
}
