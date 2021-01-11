import { default_to } from './default_to';
import { path } from './path';
import { Any_Obj } from './types';
export function path_or<T extends Any_Obj, K extends keyof T, D>(
  defaut_val: D,
  paths_list: K[],
  obj: T
) {
  return default_to(defaut_val, path(paths_list, obj));
}
