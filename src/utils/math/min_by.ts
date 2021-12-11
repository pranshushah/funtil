import { curried3 } from '../internals/curried3';
/**
 * @description takes two value and returns a value who returns min value when call with given function.also works with curried form.
 * @category Math
 * @example
 * function todoLength(todo:Todo){
 *    return todo.task.length
 * }
 * F.min_by(todoLength,{id:"1",task:"going for a walk"},{id:"2",task:"painting"}) // {id:"2",task:"painting"}
 */
export function min_by<T>(keyFn: (a: T) => number, a: T, b: T): T;
export function min_by<T>(keyFn: (a: T) => number, a: T): (b: T) => T;
export function min_by<T>(
  keyFn: (a: T) => number
): {
  (a: T, b: T): T;
  (a: T): (b: T) => T;
};
export function min_by<T>(keyFn: (a: T) => number, a?: T, b?: T) {
  return curried3(
    function main(keyFn: (a: T) => number, a: T, b: T) {
      return keyFn(a) > keyFn(b) ? b : a;
    },
    keyFn,
    a,
    b
  );
}
