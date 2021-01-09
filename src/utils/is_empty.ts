import { is_object } from './is_object';
import deep from 'fast-deep-equal';
import { is_array } from './is_array';
export function is_empty(x: any) {
  if (is_object(x)) {
    return deep(x, {});
  } else if (is_array(x)) {
    return x.length === 0;
  } else if (typeof x === 'string') {
    return x.length === 0;
  } else {
    return true;
  }
}
