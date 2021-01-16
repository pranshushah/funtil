import { partial2 } from './internals/partial2';

export function lt(x2: number, x1: number): boolean;
export function lt(x2: number): (x1: number) => boolean;

export function lt(x2: number, x1?: number) {
  return partial2(
    function main(x2: number, x1: number) {
      return x1 < x2;
    },
    x2,
    x1
  );
}
