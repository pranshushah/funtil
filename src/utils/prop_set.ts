import { partial3 } from './internals/partial3';
import { Any_Obj } from './types';

/**
 * @description add new key-val pair in object and returns new copy of object(Note: it creates shallow copy).also works with partial form.
 * @category Object
 */
export function prop_set<T extends Any_Obj, K extends Any_Obj>(
  obj: T,
  key: keyof K,
  val: K[keyof K]
): T & K;

export function prop_set<T extends Any_Obj>(
  obj: T
): {
  <K extends Any_Obj>(key: keyof K, val: K[keyof K]): T & K;
  <K extends Any_Obj>(key: keyof K): (val: K[keyof K]) => T & K;
};

export function prop_set<T extends Any_Obj, K extends Any_Obj>(
  obj: T,
  key: keyof K
): (val: K[keyof K]) => T & K;

export function prop_set<T extends Any_Obj, K extends Any_Obj>(
  obj: T,
  key?: keyof K,
  val?: K[keyof K]
) {
  return partial3(
    function main(obj: T, key: keyof K, val: K[keyof K]) {
      //@ts-ignore
      let ret: T & K = { ...obj };
      //@ts-ignore
      ret[key] = val;
      return ret;
    },
    obj,
    key,
    val
  );
}
