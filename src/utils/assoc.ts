import { partial3 } from './internals/partial3';

export function assoc<T, U extends object, K extends string | number>(
  prop: K,
  val: T,
  obj: U
): Record<K, T> & U;

export function assoc<T, U extends object, K extends string | number>(
  prop: K,
  val: T
): (obj: U) => Record<K, T> & U;

export function assoc<K extends string | number>(
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
  return partial3(
    function main(prop: K, val: T, obj: U) {
      return { ...obj, [prop]: val } as Record<K, T> & U;
    },
    prop,
    val,
    obj
  );
}
