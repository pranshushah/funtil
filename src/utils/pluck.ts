import { map } from './map';
import { prop } from './prop';
import { partial } from './partial';
export function pluck<K extends keyof T, T>(key: K, arr: readonly T[]) {
  let value_getter = partial(prop, key);
  return map(value_getter, arr);
}
