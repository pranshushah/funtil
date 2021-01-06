import { for_each } from './for_each';

export function index_by<T, K extends string | number = string>(
  fn: (a: T) => K,
  list: readonly T[]
): { [key in K]: T } {
  // doing this because otherwiase it will thorw error "Variable 'ret_obj' is used before being assigned"
  let ret_obj = {} as { [key in K]: T };

  function generate_obj(val: T) {
    ret_obj[fn(val)] = val;
  }

  for_each(generate_obj, list);

  return ret_obj;
}
