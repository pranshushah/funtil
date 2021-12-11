import { curried2 } from '../internals/curried2';

/**
 * @description takes an array of keys and values and makes object out of it.
 * @category List
 * @example
 * ```typescript
 * zip_obj(['id', 'name'], [11, 'pranshu shah']) // {"id":11,"name":"pranshu shah"}
 * ```
 */
export function zip_obj<T>(
  keys: (string | number)[],
  values: T[]
): Record<string | number, T>;
export function zip_obj(
  keys: (string | number)[]
): <T>(values: T[]) => Record<string | number, T>;

export function zip_obj<T>(keys: (string | number)[], values?: T[]) {
  return curried2(
    function main(keys: (string | number)[], values: T[]) {
      const length = Math.min(keys.length, values.length);
      let result: Record<string | number, T> = {};

      for (let index = 0; index < length; index++) {
        result[keys[index]] = values[index];
      }
      return result;
    },
    keys,
    values
  );
}
