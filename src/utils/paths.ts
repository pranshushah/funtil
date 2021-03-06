import { partial2 } from './internals/partial2';
import { map } from './map';
import { Any_Obj } from './types';

/**
 * @description same as ```F.path``` but here it takes an array of path array ,object and returns array of value if values at given path does not exist at given path it returns ```undefined```;also works with partial form.
 */
export function paths<T extends Any_Obj, K extends keyof T>(
  paths_list: K[][],
  obj: T
): (T[K] | undefined)[];

export function paths<T extends Any_Obj, K extends keyof T>(
  paths_list: K[][]
): (obj: T) => (T[K] | undefined)[];

export function paths<T extends Any_Obj, K extends keyof T>(
  paths_list: K[][],
  obj?: T
) {
  return partial2(
    function main(paths_list: K[][], obj: T) {
      return map(function mapper(paths) {
        let val = obj as T[K];
        for (let index = 0; index < paths.length; index) {
          if (val === null || val === undefined) {
            return;
          }
          let p = paths[index];
          val = val[p];
        }
        return val;
      }, paths_list);
    },
    paths_list,
    obj
  );
}
