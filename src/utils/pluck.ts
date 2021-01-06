import { map } from './map';
import { prop } from './prop';
import { partial_right } from './partial_right';
export function pluck<K extends keyof T, T>(key: K, arr: readonly T[]): T[K][] {
  let value_getter = partial_right(prop, key);
  return map(value_getter, arr) as T[K][];
}
