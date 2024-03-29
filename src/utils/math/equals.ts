import equal from 'fast-deep-equal';
import { curried2 } from '../internals/curried2';

/**
 * @description compares two element. it uses deep equality to check two elements.also works in curried form.
 * @category Math
 * @example
 * F.equals("pranshu","pranshu") // true;
 * F.equals({id:1,name:"pranshu"},{id:1,name:"pranshu"}) // true
 */
export function equals(y: any, x: any): boolean;
export function equals(y: any): (x: any) => boolean;

export function equals(y: any, x?: any) {
  return curried2(
    function main(y, x) {
      return equal(x, y);
    },
    y,
    x
  );
}
