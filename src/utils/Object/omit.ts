import { for_each } from '../List/for_each';
import { partial2 } from '../internals/curried2';
import produce from 'immer';

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
      return produce(obj, (draft: O) => {
        for_each(function(val: K) {
          delete draft[val];
        }, delete_keys);
      });
    },
    obj,
    delete_keys
  );
}
