import { O } from 'ts-toolbelt';
import { partial3 } from './internals/partial3';

export function prop_set<T extends O.Object, R extends O.Keys<T>>(
  key: R,
  obj: T,
  val: T[R]
): T;

export function prop_set<T extends O.Object, R extends O.Keys<T>>(
  key: R
): { (obj: T, val: T[R]): T; (obj: T): (val: T[R]) => T };

export function prop_set<T extends O.Object, R extends O.Keys<T>>(
  key: R,
  obj: T
): (val: T[R]) => T;

export function prop_set<T extends O.Object, R extends O.Keys<T>>(
  key: R,
  obj?: T,
  val?: T[R]
) {
  return partial3(
    function main(key: R, obj: T, val: T[R]) {
      const ret = { ...obj };
      ret[key] = val;
      return ret;
    },
    key,
    obj,
    val
  );
}
