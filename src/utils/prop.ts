import { O } from 'ts-toolbelt';
import { partial2 } from './internals/partial2';

/**
 * @description returns value of given key in the object we passed. also works with partial form.
 */
export function prop<T extends O.Object>(obj: T, key: keyof T): T[keyof T];

export function prop<T extends O.Object>(obj: T): (key: keyof T) => T[keyof T];

export function prop<T extends O.Object>(
  obj: T,
  key?: keyof T
): T[keyof T] | ((key: keyof T) => T[keyof T]) {
  return partial2(
    function main(obj: T, key: keyof T) {
      return obj[key];
    },
    obj,
    key
  );
}
