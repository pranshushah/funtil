import { reduce } from '../List/reduce';
import { add } from './add';

/**
 * @description takes number of array returns sum of the array.
 * @category Math
 * @example
 * ```typescript
 * F.sum([1,2,3]) // 6
 * ```
 */
export function sum(x: number[]) {
  return reduce(add, 0, x);
}
