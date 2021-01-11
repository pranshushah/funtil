import { partial2 } from './internals/partial2';
import { paths } from './paths';
import { Any_Obj } from './types';

export function path<T extends Any_Obj, K extends keyof T>(
  paths_list: K[],
  obj: T
): T[K] | undefined;

export function path<T extends Any_Obj, K extends keyof T>(
  paths_list: K[]
): (obj: T) => T[K] | undefined;

export function path<T extends Any_Obj, K extends keyof T>(
  paths_list: K[],
  obj?: T
) {
  return partial2(
    function main(paths_list: K[], obj: T) {
      return paths([paths_list], obj)[0];
    },
    paths_list,
    obj
  );
}
