import { curried2 } from '../internals/curried2';
import { Any_Obj, Pick_by } from '../types';
/**
 * @description Returns a partial copy of an object containing only the keys that satisfy the supplied predication function;also works with partial form.
 * @category Object
 */
export function pick_by<
  U,
  T extends Any_Obj = { [x: string]: any },
  K extends keyof T = string
>(pred: (key: K, value: T[K]) => boolean, obj: T): Pick_by<U, T>;
export function pick_by<
  U,
  T extends Any_Obj = { [x: string]: any },
  K extends keyof T = string
>(pred: (key: K, value: T[K]) => boolean): (obj: T) => Pick_by<U, T>;

export function pick_by<
  U,
  T extends Any_Obj = { [x: string]: any },
  K extends keyof T = string
>(pred: (key: K, value: T[K]) => boolean, obj?: T) {
  return curried2(
    function main(pred: (key: K, value: T[K]) => boolean, obj: T) {
      let result: Partial<T> = {};
      for (let key in Object.keys(obj)) {
        // @ts-ignore
        if (pred(key, obj[key])) {
          result[key] = obj[key];
        }
      }
      return result as Pick_by<U, T>;
    },
    pred,
    obj
  );
}
