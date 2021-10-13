import { partial3 } from '../internals/partial3';
/**
 * @description takes two value and returns a value who returns max value when call with given function.also works with partial form.
 * @category Math
 * @example
 * function todoLength(todo:Todo){
 *    return todo.task.length
 * }
 * F.max_by(todoLength,{id:"1",task:"going for a walk"},{id:"2",task:"painting"}) // {id:"1",task:"going for a walk"}
 */
export function max_by<T>(keyFn: (a: T) => number, a: T, b: T): T;
export function max_by<T>(keyFn: (a: T) => number, a: T): (b: T) => T;
export function max_by<T>(
  keyFn: (a: T) => number
): {
  (a: T, b: T): T;
  (a: T): (b: T) => T;
};

export function max_by<T>(keyFn: (a: T) => number, a?: T, b?: T) {
  return partial3(
    function main(keyFn: (a: T) => number, a: T, b: T) {
      return keyFn(a) > keyFn(b) ? a : b;
    },
    keyFn,
    a,
    b
  );
}
