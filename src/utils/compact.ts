import { for_each } from './for_each';

export function compact<T>(arr: T[]) {
  let result: T[] = [];
  for_each(function cb(val: T) {
    if (val) {
      result.push(val);
    }
  }, arr);
  return result;
}
