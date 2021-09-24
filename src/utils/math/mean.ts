import { sum } from './sum';

/**
 * @description takes array of numbers returns mean of that array.
 * @category Math
 */
export function mean(x: number[]) {
  return sum(x) / x.length;
}
