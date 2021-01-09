import { partial2 } from './internals/partial2';
import { is_null } from './is_null';
import { is_undefined } from './is_undefined';

export function default_to<T1 = any, T2 = any>(
  default_val: T1,
  check_val: T2
): T1 | T2;

export function default_to<T1 = any, T2 = any>(
  default_val: T1
): (check_val: T2) => T1 | T2;

export function default_to<T1 = any, T2 = any>(
  default_val: T1,
  check_val?: T2
) {
  return partial2(
    function main(default_val: T1, check_val: T2) {
      // @ts-ignore
      if (is_undefined(check_val) || is_null(check_val) || isNaN(check_val)) {
        return default_val;
      } else {
        return check_val;
      }
    },
    default_val,
    check_val
  );
}
