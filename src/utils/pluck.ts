import { map } from './List/map';
import { prop } from './prop';
import { partial_right } from './partial_right';
import { partial2 } from './internals/partial2';
import { Any_Obj } from './types';

type passing_prop = <T extends object>(
  obj: T,
  key: string | number | symbol
) => T[keyof T];

/**
 * @description Returns a neuw list by plucking the same named property off all objects in the list supplied;also works with partial form.
 * @category List
 * @example
 * F.pluck('name', [
    { id: 1, name: 'pranshu' },
    { id: 2, name: 'nisarg' },
  ]); // ["pranshu","nisarg"]
 */

export function pluck<T extends Any_Obj>(
  key: keyof T,
  arr: readonly T[]
): T[keyof T][];
export function pluck(
  key: string | number | symbol
): <T>(arr: readonly T[]) => T[keyof T][];

export function pluck<T extends object, K extends keyof T>(
  key: K,
  arr?: readonly T[]
) {
  return partial2(
    function main(key: K, arr: readonly T[]) {
      let value_getter = partial_right<
        [string | number | symbol],
        [T],
        passing_prop
      >(prop, key);
      let plukked = map(obj => value_getter(obj), arr);
      return plukked;
    },
    key,
    arr
  );
}
