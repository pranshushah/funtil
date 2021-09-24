import { partial2 } from './internals/partial2';
import { Any_Obj } from './types';

/**
 * @description takes a function and object and calls that function on every property in object.also works with partial argument.
 * @category Object
 */
export function for_each_obj_indexed<T extends Any_Obj>(
  fn: (value: T[keyof T], key: keyof T, obj: T) => void,
  obj: T
): T;

export function for_each_obj_indexed<T extends Any_Obj>(
  fn: (value: T[keyof T], key: keyof T, obj: T) => void
): (obj: T) => T;

export function for_each_obj_indexed<T extends Any_Obj>(
  fn: (value: T[keyof T], key: keyof T, obj: T) => void,
  obj?: T
) {
  return partial2(
    function main(
      fn: (value: T[keyof T], key: keyof T, obj: T) => void,
      obj: T
    ) {
      const result = { ...obj };
      for (let key of Object.keys(obj)) {
        fn(result[key], key, result);
      }
      return result;
    },
    fn,
    obj
  );
}
