import { partial3 } from './internals/partial3';

/**
 * @description Returns ```true``` if the specified object property satisfies the given predicate; ```false``` otherwise; also works with partial form.
 */
export function prop_satisfies<T extends object, K extends keyof T>(
  pre: (arg: T[K]) => boolean,
  key: K,
  obj: T
): boolean;

export function prop_satisfies<T extends object, K extends keyof T>(
  pre: (arg: T[K]) => boolean,
  key: K
): (obj: T) => boolean;

export function prop_satisfies<T extends object, K extends keyof T>(
  pre: (arg: T[K]) => boolean
): { (key: K, obj: T): boolean; (key: K): (obj: T) => boolean };

export function prop_satisfies<T extends object, K extends keyof T>(
  pre: (arg: T[K]) => boolean,
  key?: K,
  obj?: T
) {
  return partial3(
    function main(pre: (arg: T[K]) => boolean, key: K, obj: T) {
      return pre(obj[key]);
    },
    pre,
    key,
    obj
  );
}
