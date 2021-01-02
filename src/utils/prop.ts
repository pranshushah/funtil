import { O } from 'ts-toolbelt';

export function prop<T extends O.Object>(key: O.Keys<T>, obj: T) {
  return obj[key];
}
