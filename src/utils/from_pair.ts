import { reduce } from './reduce';
import { Obj } from './types';
export function from_pair<T>(arr: [string | number, T][]) {
  let return_obj: Obj<T> = {};
  function reducer_fn(acc: Obj<T>, current_val: [string | number, T]) {
    const selected_key = current_val[0];
    const selected_val = current_val[1];
    acc[selected_key] = selected_val;
    return acc;
  }
  return reduce(reducer_fn, arr, return_obj);
}
