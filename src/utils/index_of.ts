import { partial2 } from './internals/partial2';
import { equals } from './math/equals';

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
