import { equals } from '../math/equals';
import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';
/**
 * @description it checks whether given element is in array or not. it uses F.equals,also works with partial form.
 * @category List
 * ```typescript
 * F.includes("pranshu",["pranshu","mit","saumya"]) // true
 * F.includes({id:1,name:"pranshu"},[{id:1,name:"pranshu"},{id:2,name:"mit"},{id:3,name:"sanket"}]) // true
 * F.includes({id:1,name:"saumya"},[{id:1,name:"pranshu"},{id:2,name:"mit"},{id:3,name:"sanket"}]) // false
 * ```
 */
export function includes<T = any>(target: T, source: T[]): boolean;
export function includes<T = any>(
  x: Placeholder,
  source: T[]
): (target: T) => boolean;
export function includes<T = any>(target: T): (source: T[]) => boolean;

export function includes<T = any>(target: T, source?: T[]) {
  return curried2(
    function main_contains(target: T, source: T[]) {
      let ret_val: boolean = false;
      for (let index = 0; index < source.length; index++) {
        if (equals(target, source[index])) {
          ret_val = true;
          break;
        }
      }
      return ret_val;
    },
    target,
    source
  );
}
