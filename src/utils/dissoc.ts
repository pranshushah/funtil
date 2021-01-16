import { O } from 'ts-toolbelt';
import { partial2 } from './internals/partial2';
/**
 * @description returns the object that omits prop property.
 */
export function dissoc<T extends object, K extends keyof T>(
  prop: K,
  obj: T
): Omit<T, K>;
export function dissoc<T extends object, K extends keyof T>(
  prop: K
): (obj: T) => Omit<T, K>;

export function dissoc<T extends object, K extends keyof T>(prop: K, obj?: T) {
  return partial2(
    function main(prop: K, obj: T) {
      let result = { ...obj };
      delete result[prop];
      // @ts-ignore
      return result as O.Omit<T, K>;
    },
    prop,
    obj
  );
}
