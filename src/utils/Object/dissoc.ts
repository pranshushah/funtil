import { O } from 'ts-toolbelt';
import { partial2 } from '../internals/partial2';
/**
 * @description returns the object that omits prop property.also works in partial form
 * @category Object
 * @returns shallow copy of the object with omitted key.
 * @example
 * ```typescript
 * F.dissoc("room",{id:1,name:"pranshu",room:401}); // {id:1,name:"pranshu"}
 * let deleteRoom = F.dissoc("room");
 * deleteRoom({id:2,name:"mit",room:1001}) // {id:2,name:"mit"}
 * ```
 */
export function dissoc<T extends object, K extends keyof T>(
  prop: K,
  obj: T
): Omit<T, K>;
export function dissoc<K extends string | number | symbol>(
  prop: K
): <T extends object>(obj: T) => Omit<T, K>;

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
