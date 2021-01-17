import { Any_Obj } from './types';

/**
 * @description wrapper around {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys|Object.key()}
 */
export function keys<T extends Any_Obj, K extends keyof T>(obj: T): K[] {
  return Object.keys(obj) as K[];
}
