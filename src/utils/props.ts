import { partial2 } from './internals/partial2';
import { Any_Obj } from './types';

/**
 * @description same as F.prop but here it takes array of keys and returns array of values in same order; also works with partial form.
 */
export function props<O extends Any_Obj, K extends keyof O>(
  ps: K[],
  obj: O
): O[K][];

export function props<O extends Any_Obj, K extends keyof O>(
  ps: K[]
): (obj: O) => O[K][];

export function props<O extends Any_Obj, K extends keyof O>(ps: K[], obj?: O) {
  return partial2(
    function main(ps: K[], obj: O) {
      let result: O[K][] = [];
      for (let key in ps) {
        result.push(obj[key]);
      }
      return result;
    },
    ps,
    obj
  );
}
