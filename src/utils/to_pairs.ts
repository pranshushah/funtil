import { Obj } from './types';

/**
 * @description wrapper around[Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries).
 * @category Object
 * @example
 * F.to_pair({id:1,name:"pranshu"}) // [["id",1],["name","pranshu"]]
 */
export function to_pairs<T>(obj: Obj<T>): [string | number, T][] {
  return Object.entries(obj);
}
