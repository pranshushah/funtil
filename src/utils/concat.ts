export function concat<T extends any[] | string>(arg1: T, arg2: T) {
  let return_val: T;
  if (Array.isArray(arg1) && Array.isArray(arg2)) {
    // @ts-ignore
    return_val = arg1.concat(arg2);
  } else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    // @ts-ignore
    return_val = arg1 + arg2;
  } else {
    throw Error(
      'both argument should have same type it can be either array or string'
    );
  }
  return return_val;
}
