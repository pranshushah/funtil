import { partial2 } from './internals/partial2';
import { Obj } from './types';

export function zip_obj<T>(keys: (string | number)[], values?: T[]) {
  return partial2(
    function main(keys: (string | number)[], values: T[]) {
      const length = Math.min(keys.length, values.length);
      let result: Obj<T> = {};

      for (let index = 0; index < length; index++) {
        result[keys[index]] = values[index];
      }
      return result;
    },
    keys,
    values
  );
}
