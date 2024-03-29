import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';
/**
 * @description takes two elements and checks whether both of them are equal or not. it uses **Object.is** to check equality,also works with partial form
 * @category Logic
 * @example
 * ```typescript
 * F.identical(33,33) //true
 * let obj = {id:1,name:"pranshu"};
 * F.identical(obj,obj) //true
 * F.identical({id:1,name:"pranshu"},{id:1,name:"pranshu"}) // false
 * ```
 */
export function identical(x1: any, x2: any): boolean;
export function identical(x: Placeholder, x2: any): (x1: any) => boolean;
export function identical(x1: any): (x2: any) => boolean;

export function identical(x1: any | Placeholder, x2?: any) {
  return curried2(
    function main(x1: any, x2: any) {
      return Object.is(x1, x2);
    },
    x1,
    x2
  );
}
