import { equals } from './math/equals';
import { Any_Obj } from './types';

export function eq_props(key: string | number, o1: Any_Obj, o2: Any_Obj) {
  return equals(o1[key], o2[key]);
}
