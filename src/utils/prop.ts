import { O } from 'ts-toolbelt';

export function prop<T extends O.Object, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}
