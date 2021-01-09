import { partial2 } from '../internals/partial2';

export function divide(y: number, x: number): number;
export function divide(y: number): (x: number) => number;

export function divide(y: number, x?: number) {
  return partial2(
    function main(y: number, x: number) {
      return x / y;
    },
    y,
    x
  );
}
