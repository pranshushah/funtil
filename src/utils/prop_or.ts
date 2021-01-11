import { Any_Obj } from './types';

export function prop_or<R, O extends Any_Obj, K extends keyof O>(
  default_val: R,
  prop: K,
  obj: O
) {
  return obj[prop] !== undefined ? obj[prop] : default_val;
}
