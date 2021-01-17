import { partial2 } from './internals/partial2';
/**
 * @description takes two number  and checks whether second number is less than or eqaul to first number,also works with partial form.
 */
export function lte(x1: number, x2: number): boolean;
export function lte(x1: number): (x2: number) => boolean;

export function lte(x1: number, x2?: number) {
  return partial2(
    function main(x1: number, x2: number) {
      return x1 <= x2;
    },
    x1,
    x2
  );
}
