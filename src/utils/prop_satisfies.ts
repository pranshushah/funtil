import { partial3 } from './internals/partial3';

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
