import { map } from './map';
import { prop } from './prop';
import { partial_right } from './partial_right';
import { partial2 } from './internals/partial2';

/**
 * @description Returns a new list by plucking the same named property off all objects in the list supplied;also works with partial form.
 */
export function pluck<K extends keyof T, T>(key: K, arr: readonly T[]): T[K][];
export function pluck<K extends keyof T, T>(
  key: K
): (arr: readonly T[]) => T[K][];

export function pluck<K extends keyof T, T>(key: K, arr?: readonly T[]) {
  return partial2(
    function main(key: K, arr: readonly T[]) {
      let value_getter = partial_right(prop, key);
      return map(value_getter, arr);
    },
    key,
    arr
  );
}
