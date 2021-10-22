import { for_each } from '../List/for_each';
import { partial2 } from '../internals/partial2';

/**
 * @description deletes given array of keys from object and returns new copy of object; also works with partial form.
 * @category Object
 * @example
 * ```typescript
 * F.omit({id: 'hello',name: 'pranshu',age: 24},['id', 'name']); // {age:24}
 * ```
 */
export function omit<O extends object, K extends keyof O>(
  obj: O,
  delete_keys?: K[]
): Omit<O, K>;

export function omit<O extends object, K extends keyof O>(
  obj: O
): (delete_keys: K[]) => Omit<O, K>;

export function omit<O extends object, K extends keyof O>(
  obj: O,
  delete_keys?: K[]
) {
  return partial2(
    function main(obj: O, delete_keys: K[]) {
      let result = { ...obj };

      for_each(function(val: K) {
        delete result[val];
      }, delete_keys);

      return result as Omit<O, K>;
    },
    obj,
    delete_keys
  );
}
