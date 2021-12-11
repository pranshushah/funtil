import { for_each } from './for_each';
import { curried2 } from '../internals/curried2';

export function index_by<T, K extends string | number = string>(
  fn: (a: T) => K,
  list: readonly T[]
): { [key in K]: T };

export function index_by<T, K extends string | number = string>(
  fn: (a: T) => K
): (list: readonly T[]) => { [key in K]: T };

export function index_by<T, K extends string | number = string>(
  fn: (a: T) => K,
  list?: readonly T[]
) {
  return curried2(
    function main(fn: (a: T) => K, list: readonly T[]) {
      let ret_obj = {} as { [key in K]: T };

      function generate_obj(val: T) {
        ret_obj[fn(val)] = val;
      }

      for_each(generate_obj, list);

      return ret_obj;
    },
    fn,
    list
  );
}
