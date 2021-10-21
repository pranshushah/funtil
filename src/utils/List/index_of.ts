import { partial2 } from '../internals/partial2';
import { equals } from '../math/equals';

/**
 * @description takes and element and array and finds index of that element in array.it uses F.equals so you can find idnex of non primitive easily,also works with partial form
 * @category List
 * @example
 * ```typescript
 * F.index_of("pranshu",["mit","pranshu","saumya"]) // 1
 * F.index_of({id:1,name:"pranshu"},[{id:1,name:"pranshu"},{id:2,name:"mit"},{id:3,name:"sanket"}]) // 0
 * F.index_of({id:1,name:"saumya"},[{id:1,name:"pranshu"},{id:2,name:"mit"},{id:3,name:"sanket"}]) // -1
 * ```
 */
export function index_of<T>(item: T, arr: readonly T[]): number;
export function index_of<T>(item: T): (arr: readonly T[]) => number;

export function index_of<T>(item: T, arr?: readonly T[]) {
  return partial2(
    function main(item: T, arr: readonly T[]) {
      let return_index = -1;
      const compare = equals(item);
      for (let index = 0; index < arr.length; index++) {
        if (compare(arr[index])) {
          return_index = index;
          break;
        }
      }
      return return_index;
    },
    item,
    arr
  );
}
