import { Any_Obj } from './types';

/**
 * @description returns array of values from object.
 */
export function values<T extends Any_Obj, K extends keyof T>(obj: T): T[K][] {
  return Object.values(obj);
}
