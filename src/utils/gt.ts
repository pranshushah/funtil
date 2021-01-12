import { partial2 } from './internals/partial2';

export function gt(x1: number, x2: number): boolean;
export function gt(x1: number): (x2: number) => boolean;

export function gt(x1: number, x2?: number) {
  return partial2(
    function main(x1: number, x2: number) {
      return x1 > x2;
    },
    x1,
    x2
  );
}
