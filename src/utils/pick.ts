import { partial2 } from './internals/partial2';
import { Any_Obj } from './types';

/**
 * @description Returns a partial copy of an object containing only the keys specified. If the key does not exist, the property is ignored;also works with partial form.
 */
export function pick<O extends Any_Obj, K extends keyof O>(
  keys: K[],
  obj: O
): Pick<O, K>;

export function pick<O extends Any_Obj, K extends keyof O>(
  keys: K[]
): (obj: O) => Pick<O, K>;

export function pick<O extends Any_Obj, K extends keyof O>(keys: K[], obj?: O) {
  return partial2(
    function main(keys: K[], obj: O) {
      let copy_obj = { ...obj };
      let result = {} as Pick<O, K>;
      for (let key in keys) {
        if (copy_obj[key] !== undefined) {
          // @ts-ignore
          result[key] = copy_obj[key];
        }
      }
      return result;
    },
    keys,
    obj
  );
}
