import { partial2 } from './internals/partial2';

/**
 * @description same as es6 [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). also works with partial form.
 * @category List
 * @example
 * function mapper(todo:Todo){
 *    return todo.task
 * }
 * F.map(mapper,[{id:1,task:"task1"},{id:2,task:"task2"},{id:3,task:"task3"}]) // ["task1","task2","task3"]
 */
export function map<T, R>(
  mapper: (val: T, index: number, arr: readonly T[]) => R,
  arr: readonly T[]
): R[];

export function map<T, R>(
  mapper: (val: T, index: number, arr: readonly T[]) => R
): (arr: readonly T[]) => R[];

export function map<T, R>(
  mapper: (val: T, index: number, arr: readonly T[]) => R,
  arr?: readonly T[]
) {
  return partial2(
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
