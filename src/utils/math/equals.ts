import equal from 'fast-deep-equal';
import { partial2 } from '../internals/partial2';

/**
 * @description compares two element. it uses deep equality to check two elements.
 */
export function equals(y: any, x: any): boolean;
export function equals(y: any): (x: any) => boolean;

export function equals(y: any, x?: any) {
  return partial2(
    function main(y, x) {
      return equal(x, y);
    },
    y,
    x
  );
}
