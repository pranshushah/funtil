import produce from 'immer';
import { curried3 } from '../internals/curried3';

/**
 * @description takes key,value and object and returns object that includes given key and pair
 * @returns new object with all properties of old object and new key,value pair we pass
 * @category Object
 * @example
 * ```typescript
 * F.assoc('z',"hello",{x:1,y:2}) // {x:1,y:2,z:"hello"}
 * ```
 */

export function assoc<T, U extends object, K extends string | number | symbol>(
  prop: K,
  val: T,
  obj: U
): Record<K, T> & U;

export function assoc<T, U extends object, K extends string | number | symbol>(
  prop: K,
  val: T
): (obj: U) => Record<K, T> & U;

export function assoc<K extends string | number | symbol>(
  prop: K
): {
  <T, U extends object>(val: T): (obj: U) => Record<K, T> & U;
  <T, U extends object>(val: T, obj: U): Record<K, T> & U;
};

export function assoc<T, U extends object, K extends string | number>(
  prop: K,
  val?: T,
  obj?: U
) {
  return curried3(
    function main(prop: K, val: T, obj: U) {
      return produce(obj, (draft: any) => {
        draft[prop] = val;
      }) as Record<K, T> & U;
    },
    prop,
    val,
    obj
  );
}
