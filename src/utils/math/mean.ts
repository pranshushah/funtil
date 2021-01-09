import { sum } from './sum';

export function mean(x: number[]) {
  return sum(x) / x.length;
}
