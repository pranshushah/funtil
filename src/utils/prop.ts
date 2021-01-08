import { O } from 'ts-toolbelt';
import { partial2 } from './internals/partial2';

export function prop<T extends O.Object, K extends keyof T>(
  obj: T,
  key: K
): T[K];

export function prop<T extends O.Object, K extends keyof T>(
  obj: T
): (key: K) => T[K];

export function prop<T extends O.Object, K extends keyof T>(
  obj: T,
  key?: K
): T[K] | ((key: K) => T[K]) {
  return partial2(
    function main(obj: T, key: K) {
      return obj[key];
    },
    obj,
    key
  );
}
