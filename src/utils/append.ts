import { T } from 'ts-toolbelt';
import { concat } from './concat';
import { partial2 } from './internals/partial2';

export function append<T>(arr: T[]): (val: T) => T[];
export function append<T>(arr: T[], val: T): T[];

export function append<T>(arr: T[], val?: T) {
  return partial2(
    function main_append(arr: T[], val: T) {
      return concat(arr, [val]);
    },
    arr,
    val
  );
}
