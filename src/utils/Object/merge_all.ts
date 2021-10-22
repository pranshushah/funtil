import { reduce } from '../List/reduce';
import { MergeAll } from '../types';
/**
 * @description takes an array of objects and returns an object containing all objects in array,also work in partial form
 * @category Object
 * @example
 * ```typescript
 * F.merge_all([
    { id: '11', name: 'pranshu shah' },
    { id: '12', task: 'woww' },
    { id: '13', name: 'zoom' },
  ]); // {id:'13',name:"zoom",task:"woww"}
 * ```
 */
export function merge_all<OL extends object[]>(arr: OL): MergeAll<OL> {
  let result = {} as MergeAll<OL>;
  function reducer_fn(acc: MergeAll<OL>, val: object) {
    return Object.assign(acc, val);
  }
  return reduce(reducer_fn, result, arr);
}
