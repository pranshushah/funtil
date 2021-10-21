import { reduce } from './reduce';
import { Obj } from '../types';
/**
 * @description takes array of tuple of [key,value] and maps that tuples into object.
 * @returns an object which was created from key-value pair of array.
 * @category List
 * @example
 * ```typescript
 * let namePair = [["name","pranshu"],["age",24],["city","surat"]]
 * F.from_pair(namePair) {name:"pranshu",age:24,city:"surat"}
 * ```
 */
export function from_pair<T>(arr: [string | number, any][]) {
  let return_obj: Obj<any> = {};
  function reducer_fn(acc: Obj<any>, current_val: [string | number, T]) {
    const selected_key = current_val[0];
    const selected_val = current_val[1];
    acc[selected_key] = selected_val;
    return acc;
  }
  return reduce(reducer_fn, return_obj, arr);
}
