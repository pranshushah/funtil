import { partial3 } from './internals/partial3';
import { Any_Obj } from './types';

/**
 * @description Returns ```true``` if the specified object property satisfies the given predicate; ```false``` otherwise; also works with partial form.
 * @category Object
 */
export function prop_satisfies<T extends Any_Obj>(
  pre: (arg: any) => boolean,
  key: keyof T,
  obj: T
): boolean;

export function prop_satisfies<T extends Any_Obj>(
  pre: (arg: any) => boolean,
  key: string | number | symbol
): (obj: T) => boolean;

export function prop_satisfies(
  pre: (arg: any) => boolean
): {
  <T extends Any_Obj>(key: keyof T, obj: T): boolean;
  (key: string | number | symbol): <T extends Any_Obj>(obj: T) => boolean;
};

export function prop_satisfies<T extends Any_Obj>(
  pre: (arg: any) => boolean,
  key?: keyof T,
  obj?: T
) {
  return partial3(
    function main(pre: (arg: any) => boolean, key: keyof T, obj: T) {
      return pre(obj[key]);
    },
    pre,
    key,
    obj
  );
}
