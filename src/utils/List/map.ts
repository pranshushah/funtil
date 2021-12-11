import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';

/**
 * @description same as es6 [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). also works with partial form.
 * @category List
 * @example
 * ```typescript
 * function mapper(todo:Todo){
 *    return todo.task
 * }
 * F.map(mapper,[{id:1,task:"task1"},{id:2,task:"task2"},{id:3,task:"task3"}]) // ["task1","task2","task3"]
 * ```
 */
export function map<T, R>(
  mapper: (val: T, index: number, arr: readonly T[]) => R,
  arr: readonly T[]
): R[];

export function map<T, R>(
  x: Placeholder,
  arr: readonly T[]
): (mapper: (val: T, index: number, arr: readonly T[]) => R) => R[];

export function map<T, R>(
  mapper: (val: T, index: number, arr: readonly T[]) => R
): (arr: readonly T[]) => R[];

export function map<T, R>(
  mapper: ((val: T, index: number, arr: readonly T[]) => R) | Placeholder,
  arr?: readonly T[]
) {
  return curried2(
    function main(
      mapper: (val: T, index: number, arr: readonly T[]) => R,
      arr: readonly T[]
    ) {
      let mappedArray: R[] = [];
      for (let [index, val] of arr.entries()) {
        mappedArray.push(mapper(val, index, arr));
      }
      return mappedArray;
    },
    mapper,
    arr
  );
}
