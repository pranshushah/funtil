import { index_of } from './index_of';
import { filter } from './filter';
/**
 * @description drops repeating elements in array it uses F.equals internally and returns new copy of array
 * @returns new array that does not contain the copy.
 * @category List
 * @example
 * ```typescript
 * F.drop_repeats([1,2,3,1,2,3,1,2]) // [1,2,3]
 * F.drop_repeats([{id:1,name:"pranshu"},{id:2,name:"mit"},{id:3,name:"sanket"},{id:2,name:"mit"}]) // [{id:1,name:"pranshu"},{id:2,name:"mit"},{id:3,name:"sanket"}]
 * ```
 */
export function drop_repeats<T extends any[]>(arr: T) {
  return filter((val, index, array) => index_of(val, array) === index, arr);
}
