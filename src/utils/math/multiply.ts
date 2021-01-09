import { partial2 } from '../internals/partial2';

export function multiply(x: number, y: number): number;
export function multiply(x: number): (y: number) => number;

export function multiply(x: number, y?: number) {
  return partial2(
    function main(x: number, y: number) {
      return x * y;
    },
    x,
    y
  );
}
