import { Any_Obj } from './types';

export function keys<T extends Any_Obj, K extends keyof T>(obj: T): K[] {
  return Object.keys(obj) as K[];
}
