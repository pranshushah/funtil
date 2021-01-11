import { partial2 } from './internals/partial2';
import { Any_Obj } from './types';

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
