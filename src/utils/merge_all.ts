import { reduce } from './reduce';
import { MergeAll } from './types';
/**
 * @description takes an array of objects and returns an object containing all objects in array,also work in partial form
 */
export function merge_all<OL extends object[]>(arr: OL): MergeAll<OL> {
  let result = {} as MergeAll<OL>;
  function reducer_fn(acc: MergeAll<OL>, val: object) {
    return Object.assign(acc, val);
  }
  return reduce(reducer_fn, result, arr);
}
