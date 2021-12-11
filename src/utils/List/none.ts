import { curried2 } from '../internals/curried2';
import { Placeholder } from '../types';

/**
 * @description returns true if predication function returns false for all the value of array, otherwise it returns false; also works with partial form.
 * @category List
 * @example
 * ```typescript
  function doneChecker(todo: Todo) {
    return todo.done === true;
  }
  F.none(doneChecker,[
    { id: 11, done: false },
    { id: 12, done: false },
    { id: 13, done: true },
    { id: 14, done: false },
  ]) // false

  F.none(doneChecker,[
    { id: 11, done: false },
    { id: 12, done: false },
    { id: 13, done: false },
    { id: 14, done: false },
  ]) // true
 * ```
 */
export function none<T>(fn: (arg: T) => boolean, arr: T[]): boolean;
export function none<T>(
  x: Placeholder,
  arr: T[]
): (fn: (arg: T) => boolean) => boolean;
export function none<T>(fn: (arg: T) => boolean): (arr: T[]) => boolean;

export function none<T>(fn: ((arg: T) => boolean) | Placeholder, arr?: T[]) {
  return curried2(
    function main(fn: (arg: T) => boolean, arr: T[]) {
      for (let index = 0; index < arr.length; index++) {
        if (fn(arr[index])) {
          return false;
        }
      }
      return true;
    },
    fn,
    arr
  );
}
