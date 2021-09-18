import { partial2 } from './internals/partial2';
import { is_null } from './is_null';
import { is_undefined } from './is_undefined';
import { Any_Obj, DeepKeys } from './types';

/**
 * @description takes a path as an array and the object and returns the value at given in object otherwise it returns ```undefined```;also works with partial form.
 */
export function path<T extends Any_Obj, ReturnValueType>(
  path_list: DeepKeys<T>[],
  obj: T
): ReturnValueType | undefined;

export function path<T extends Any_Obj>(
  path_list: DeepKeys<T>[]
): <ReturnValueType>(obj: T) => ReturnValueType | undefined;

export function path<T extends Any_Obj>(path_list: DeepKeys<T>[], obj?: T) {
  return partial2(
    function main(path_list: DeepKeys<T>[], obj: T) {
      let val: any = obj;
      for (let index = 0; index < path_list.length; index++) {
        if (is_null(val) || is_undefined(val)) {
          return undefined;
        }
        let p = path_list[index];
        val = val[p];
      }
      return val;
    },
    path_list,
    obj
  );
}
