import { partial2 } from './internals/partial2';

/**
 * @description creates an object of given key val pair; also works with partial form.
 */
export function object_of<T, K extends string | number>(
  key: K,
  value: T
): Record<K, T>;
export function object_of<T, K extends string | number>(
  key: K
): (value: T) => Record<K, T>;

export function object_of<T, K extends string | number>(key: K, value?: T) {
  return partial2(
    function main(key: K, value: T) {
      return { [key]: value } as Record<K, T>;
    },
    key,
    value
  );
}
