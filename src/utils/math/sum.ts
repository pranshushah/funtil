import { reduce } from '../reduce';
import { add } from './add';

/**
 * @description takes number of array returns sum of the array.
 * @category Math
 */
export function sum(x: number[]) {
  return reduce(add, 0, x);
}
