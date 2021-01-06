import { O } from 'ts-toolbelt';

export function prop<T extends O.Object>(key: keyof T, obj: T) {
  return obj[key];
}
