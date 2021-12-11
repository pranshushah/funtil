import produce from 'immer';
import { curried2 } from '../internals/curried2';
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
  return curried2(
    function main(prop: K, obj: T) {
      return produce(obj, (draft: T) => {
        delete draft[prop];
      });
    },
    prop,
    obj
  );
}
