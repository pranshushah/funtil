import { default_to } from './default_to';
import { partial3 } from './internals/partial3';
import { path } from './path';
import { Any_Obj } from './types';

export function path_or<T extends Any_Obj, K extends keyof T, D>(
  defaut_val: D,
  paths_list: K[],
  obj: T
): D | T[K] | undefined;

export function path_or<T extends Any_Obj, K extends keyof T, D>(
  defaut_val: D,
  paths_list: K[]
): (obj: T) => D | T[K] | undefined;

export function path_or<T extends Any_Obj, K extends keyof T, D>(
  defaut_val: D,
  paths_list: K[]
): (obj: T) => D | T[K] | undefined;

export function path_or<T extends Any_Obj, K extends keyof T, D>(
  defaut_val: D
): {
  (paths_list: K[], obj: T): D | T[K] | undefined;
  (paths_list: K[]): (obj: T) => D | T[K] | undefined;
};

export function path_or<T extends Any_Obj, K extends keyof T, D>(
  defaut_val: D,
  paths_list?: K[],
  obj?: T
) {
  return partial3(
    function main(defaut_val: D, paths_list: K[], obj: T) {
      return default_to(defaut_val, path(paths_list, obj));
    },
    defaut_val,
    paths_list,
    obj
  );
}
