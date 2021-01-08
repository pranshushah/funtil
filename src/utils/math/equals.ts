import equal from 'fast-deep-equal';
import { partial2 } from '../internals/partial2';

export function equals<T>(y: T, x: T): boolean;
export function equals<T>(y: T): (x: T) => boolean;

export function equals<T>(y: T, x?: T) {
  return partial2(
    function main(y, x) {
      return equal(x, y);
    },
    y,
    x
  );
}
