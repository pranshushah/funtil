import { default_to } from './default_to';
import { partial3 } from './internals/partial3';
import { path } from './path';
import { Any_Obj, DeepKeys } from './types';

/**
 * @description takes a default value,path as an array and object and checks whether given path exist in object, if it does it returns the value at that path otherwise returns default value;also works with partial form.
 * @category Object
 */
export function path_or<T extends Any_Obj, D>(
  defaut_val: D,
  paths_list: DeepKeys<T>[],
  obj: T
): D;

export function path_or<T extends Any_Obj, D>(
  defaut_val: D,
  paths_list: DeepKeys<T>[]
): (obj: T) => D;

export function path_or<T extends Any_Obj, D>(
  defaut_val: D
): {
  (paths_list: DeepKeys<T>[], obj: T): D;
  (paths_list: DeepKeys<T>[]): (obj: T) => D;
};

export function path_or<T extends Any_Obj, D>(
  defaut_val: D,
  paths_list?: DeepKeys<T>[],
  obj?: T
) {
  return partial3(
    function main(defaut_val: D, paths_list: DeepKeys<T>[], obj: T) {
      return default_to(defaut_val, path<typeof obj, D>(paths_list, obj));
    },
    defaut_val,
    paths_list,
    obj
  );
}
