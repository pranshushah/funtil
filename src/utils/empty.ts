import { is_array } from './is_array';

export function empty(x: object | any[] | string) {
  if (is_array(x)) {
    return [];
  } else if (typeof x === 'string') {
    return '';
  } else {
    return {};
  }
}
