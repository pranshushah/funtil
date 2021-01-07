import { reduce } from './reduce';
import { MergeAll } from './types';
export function merge_all<OL extends object[]>(arr: OL): MergeAll<OL> {
  let result = {} as MergeAll<OL>;
  function reducer_fn(acc: MergeAll<OL>, val: object) {
    return Object.assign(acc, val);
  }
  return reduce(reducer_fn, result, arr);
}
