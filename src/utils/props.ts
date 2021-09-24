import { partial2 } from './internals/partial2';

/**
 * @description same as F.prop but here it takes array of keys and returns array of values in same order; also works with partial form.
 * @category Object
 */
export function props<O extends Record<any, any>>(
  obj: O,
  ps: (keyof O)[]
): O[keyof O][];

export function props<O extends Record<any, any>>(
  obj: O
): (ps: (keyof O)[]) => O[keyof O][];

export function props<O extends Record<any, any>>(obj: O, ps?: (keyof O)[]) {
  return partial2(
    function main(obj: O, ps: (keyof O)[]) {
      let result: O[keyof O][] = [];
      for (let key of ps) {
        result.push(obj[key]);
      }
      return result;
    },
    obj,
    ps
  );
}
