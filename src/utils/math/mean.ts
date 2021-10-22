import { sum } from './sum';

/**
 * @description takes array of numbers returns mean of that array.
 * @category Math
 * @example
 * ```typescript
 * F.mean([10, 2, 38, 23, 38, 23, 21]) // 22.14
 * ```
 */
export function mean(x: number[]) {
  return sum(x) / x.length;
}
