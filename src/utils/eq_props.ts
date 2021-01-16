import { partial3 } from './internals/partial3';
import { equals } from './math/equals';
import { Any_Obj } from './types';

/**
 * @description takes key and 2 objects and checks whether given key has same value in object.
 */

export function eq_props(
  key: string | number,
  o1: Any_Obj,
  o2: Any_Obj
): boolean;

export function eq_props(
  key: string | number,
  o1: Any_Obj
): (o2: Any_Obj) => boolean;

export function eq_props(
  key: string | number
): {
  (o1: Any_Obj, o2: Any_Obj): boolean;
  (o1: Any_Obj): (o2: Any_Obj) => boolean;
};

export function eq_props(key: string | number, o1?: Any_Obj, o2?: Any_Obj) {
  return partial3(
    function main(key: string | number, o1: Any_Obj, o2: Any_Obj) {
      return equals(o1[key], o2[key]);
    },
    key,
    o1,
    o2
  );
}
