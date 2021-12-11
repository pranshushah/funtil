import { curried2 } from '../internals/curried2';

/**
 * @description wrapper around [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
 * @category List
 * @example
 * ```typescript
 * let addSpace = F.join(" ");
 * addSpace(["pranshu","shah"]) // "pranshu shah"
 * F.join('-',["left","right","center"]) // "left-right-center"
 * ```
 */
export function join(s: string, arr: any[]): string;
export function join(s: string): (arr: any[]) => string;

export function join(s: string, arr?: any[]) {
  return curried2(
    function main(s: string, arr: any[]) {
      return arr.join(s);
    },
    s,
    arr
  );
}
