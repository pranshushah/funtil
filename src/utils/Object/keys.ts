/**
 * @description wrapper around [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
 * @category Object
 * @example
 * ```typescript
 * F.keys({id:1,name:"pranshu",age:24}) // ["id","name","age"]
 * F.keys([10,20,30]) // ['0','1','2']
 * ```
 */
export function keys<T extends object>(obj: T) {
  return Object.keys(obj);
}
