import { for_each } from './for_each';
import { includes } from './includes';

export function witout<T>(removal_list: T[], list: T[]) {
  let result: T[] = [];
  function for_eached(val: T) {
    if (!includes(val, removal_list)) {
      result.push(val);
    }
  }
  for_each(for_eached, list);
  return result;
}
