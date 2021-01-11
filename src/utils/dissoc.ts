import { O } from 'ts-toolbelt';
import { partial2 } from './internals/partial2';

export function dissoc<T extends object, K extends keyof T>(
  key: K,
  obj: T
): Omit<T, K>;
export function dissoc<T extends object, K extends keyof T>(
  key: K
): (obj: T) => Omit<T, K>;

export function dissoc<T extends object, K extends keyof T>(key: K, obj?: T) {
  return partial2(
    function main(key: K, obj: T) {
      let result = { ...obj };
      delete result[key];
      // @ts-ignore
      return result as O.Omit<T, K>;
    },
    key,
    obj
  );
}
