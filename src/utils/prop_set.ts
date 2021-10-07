import { partial3 } from './internals/partial3';
import { Any_Obj } from './types';

/**
 * @description add new key-val pair in object and returns new copy of object(Note: it creates shallow copy).also works with partial form.
 * @category Object
 * @example
 * F.prop_set({id:1,todo:"doing stuff"},"author","pranshu") // {id:1,todo:"doing stuff",author:"pranshu"};
 */
export function prop_set<T extends Any_Obj, K extends Any_Obj, Val>(
  obj: T,
  key: keyof K,
  val: Val
): T & Record<keyof K, Val>;

export function prop_set<T extends Any_Obj>(
  obj: T
): {
  <K extends Any_Obj, Val>(key: keyof K, val: Val): T & Record<keyof K, Val>;
  <K extends Any_Obj>(key: keyof K): <Val>(
    val: Val
  ) => T & Record<keyof K, Val>;
};

export function prop_set<T extends Any_Obj, K extends Any_Obj>(
  obj: T,
  key: keyof K
): <Val>(val: Val) => T & Record<keyof K, Val>;

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
