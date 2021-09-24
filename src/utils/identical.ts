import { partial2 } from './internals/partial2';
/**
 * @description takes two elements and checks whether both of them are equal or not. it uses Object.is to check equality,also works with partial form
 * @category Logic
 */
export function identical(x1: any, x2: any): boolean;
export function identical(x1: any): (x2: any) => boolean;

export function identical(x1: any, x2?: any) {
  return partial2(
    function main(x1: any, x2: any) {
      return Object.is(x1, x2);
    },
    x1,
    x2
  );
}
