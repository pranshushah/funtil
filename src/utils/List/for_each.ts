import { partial2 } from '../internals/partial2';

/**
 * @description takes a function and an array, and calls that function on every element of array.
 * @returns original array.
 * @category List
 * @example
 * ```typescript
 * for_each(function todoPrinter(todo){
 *  console.log(todo.task)
 * },[{id:1,task:"task1"},{id:2,task:"task2"},{id:3,task:"task3"}]) // task1 task2 task3
 * ```
 */
export function for_each<T>(
  fn: (arg: T, index: number, arr: readonly T[]) => void,
  arr: readonly T[]
): T[];

export function for_each<T>(
  fn: (arg: T, index: number, arr: readonly T[]) => void
): (arr: readonly T[]) => T[];

export function for_each<T>(
  fn: (arg: T, index: number, arr: readonly T[]) => void,
  arr?: readonly T[]
) {
  return partial2(
    function main_for_each(
      fn: (arg: T, index: number, arr: readonly T[]) => void,
      arr: readonly T[]
    ) {
      let return_arr = arr.slice();
      for (let index = 0; index < arr.length; index++) {
        fn(arr[index], index, arr);
      }
      return return_arr;
    },
    fn,
    arr
  );
}
