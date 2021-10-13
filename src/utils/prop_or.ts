import { partial3 } from './internals/partial3';
import { is_empty } from './Function/is_empty';
import { Any_Obj } from './types';
/**
 * @description If the given, non-null object has an own property with the specified name, returns the value of that property if it does not satisfy `F.is_empty`. Otherwise returns the provided default value, also works with partial form.
 * @category Object
 * @example
 * F.prop_or('mit', { id: '11', author: 'pranshu' }, 'author'); // "pranshu"
 * F.prop_or('mit', { id: '11', author: null }, 'author'); // "mit"
 */
export function prop_or<O extends Any_Obj, ReturnType>(
  default_val: ReturnType,
  obj: O,
  prop: keyof O
): ReturnType | O[keyof O];

export function prop_or<O extends Any_Obj, ReturnType>(
  default_val: ReturnType,
  obj: O
): (prop: keyof O) => ReturnType | O[keyof O];

export function prop_or<ReturnType>(
  default_val: ReturnType
): {
  <O extends Any_Obj>(obj: O, prop: keyof O): ReturnType | O[keyof O];
  <O extends Any_Obj>(obj: O): (prop: keyof O) => ReturnType | O[keyof O];
};

export function prop_or<O extends Any_Obj, ReturnType>(
  default_val: ReturnType,
  obj?: O,
  prop?: keyof O
) {
  return partial3(
    function main(default_val: ReturnType, obj: O, prop: keyof O) {
      return is_empty(obj[prop]) ? default_val : obj[prop];
    },
    default_val,
    obj,
    prop
  );
}
