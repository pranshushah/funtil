import { Obj } from './types';

/**
 * @description wrapper around{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries|Object.entries()}.
 */
export function to_pairs<T>(obj: Obj<T>): [string | number, T][] {
  return Object.entries(obj);
}
