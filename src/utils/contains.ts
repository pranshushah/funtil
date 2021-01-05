import deep_equal from 'fast-deep-equal';
export function contains<T>(target: T, source: T[]): boolean {
  let ret_val: boolean = false;

  if (
    typeof target === 'bigint' ||
    typeof target === 'boolean' ||
    typeof target === 'number' ||
    typeof target === 'string' ||
    typeof target === 'undefined'
  ) {
    ret_val = source.includes(target);
  } else {
    for (let index = 0; index < source.length; index) {
      if (deep_equal(target, source[index])) {
        ret_val = true;
        break;
      }
    }
  }
  return ret_val;
}
