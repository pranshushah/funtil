import { index_of } from './index_of';
import { filter } from './filter';
/**
 * @description drops repeating elements in array it uses F.equals internally and returns new copy of array
 */
export function drop_repeats<T extends any[]>(arr: T) {
  return filter((val, index, array) => index_of(val, array) === index, arr);
}
