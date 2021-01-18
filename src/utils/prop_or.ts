import { partial3 } from './internals/partial3';
import { Any_Obj } from './types';
/**
 * @description If the given, non-null object has an own property with the specified name, returns the value of that property. Otherwise returns the provided default value, also works with partial form.
 */
export function prop_or<R, O extends Any_Obj, K extends keyof O>(
  default_val: R,
  prop: K,
  obj: O
): R | O[K];

export function prop_or<R, O extends Any_Obj, K extends keyof O>(
  default_val: R,
  prop: K
): (obj: O) => R | O[K];

export function prop_or<R, O extends Any_Obj, K extends keyof O>(
  default_val: R
): { (prop: K, obj: O): R | O[K]; (prop: K): (obj: O) => R | O[K] };

export function prop_or<R, O extends Any_Obj, K extends keyof O>(
  default_val: R,
  prop?: K,
  obj?: O
) {
  return partial3(
    function main(default_val: R, prop: K, obj: O) {
      return obj[prop] !== undefined ? obj[prop] : default_val;
    },
    default_val,
    prop,
    obj
  );
}
