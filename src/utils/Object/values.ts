import { Any_Obj } from '../types';

/**
 * @description returns array of values from object.
 * @category Object
 * @example
 * ```typescript
 * F.values({id:"1",name:"pranshu",age:24}) // [1,"pranshu",24]
 * ```
 */
export function values<T extends Any_Obj, K extends keyof T>(obj: T): T[K][] {
  return Object.values(obj);
}
