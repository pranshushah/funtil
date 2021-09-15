import { partial2 } from './internals/partial2';

/**
 * @description wrapper around {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join|array.join()}
 */
export function join(s: string, arr: any[]): string;
export function join(s: string): (arr: any[]) => string;

export function join(s: string, arr?: any[]) {
  return partial2(
    function main(s: string, arr: any[]) {
      return arr.join(s);
    },
    s,
    arr
  );
}
