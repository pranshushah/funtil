import { for_each } from './for_each';
import { partial2 } from './internals/partial2';

export function omit<O extends object, K extends keyof O>(
  delete_keys: K[],
  obj: O
): Omit<O, K>;

export function omit<O extends object, K extends keyof O>(
  delete_keys: K[]
): (obj: O) => Omit<O, K>;

export function omit<O extends object, K extends keyof O>(
  delete_keys: K[],
  obj?: O
) {
  return partial2(
    function main(delete_keys: K[], obj: O) {
      let result = { ...obj };

      for_each(function(val: K) {
        delete result[val];
      }, delete_keys);

      return result as Omit<O, K>;
    },
    delete_keys,
    obj
  );
}
