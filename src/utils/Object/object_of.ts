import { curried2 } from '../internals/curried2';

/**
 * @description creates an object of given key val pair; also works with partial form.
 * @category Object
 * @example
 * ```typescript
 * F.object_of('id', 222); {id:222}
 * F.object_of("getName",function(){
 *  return this.name
 * }) // {getName:function(){return this.name}}
 * ```
 */
export function object_of<T, K extends string | number>(
  key: K,
  value: T
): Record<K, T>;
export function object_of<T, K extends string | number>(
  key: K
): (value: T) => Record<K, T>;

export function object_of<T, K extends string | number>(key: K, value?: T) {
  return curried2(
    function main(key: K, value: T) {
      return { [key]: value } as Record<K, T>;
    },
    key,
    value
  );
}
