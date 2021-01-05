import { concat } from './concat';

export function append<T>(arr: T[], val: T): T[] {
  return concat(arr, [val]);
}
