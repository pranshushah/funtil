import { is_function } from './is_function';
import { is_null } from './is_null';
import { is_undefined } from './is_undefined';

export function is_array_like(x: any) {
  return (
    !is_function(x) &&
    !is_null(x) &&
    !is_undefined(x) &&
    typeof x.length === 'number'
  );
}
