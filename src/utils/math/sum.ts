import { reduce } from '../reduce';
import { add } from './add';

export function sum(x: number[]) {
  return reduce(add, 0, x);
}
