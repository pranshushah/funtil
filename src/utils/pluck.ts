import { map } from './map';
import { prop } from './prop';
import { partial_right } from './partial_right';
import { partial2 } from './internals/partial2';
export function pluck<K extends keyof T, T>(
  key: K,
  arr?: readonly T[]
): T[K][] | ((arr: readonly T[]) => T[K][]) {
  return partial2(
    function main(key: K, arr: readonly T[]) {
      let value_getter = partial_right(prop, key);
      return map(value_getter, arr) as T[K][];
    },
    key,
    arr
  );
}
