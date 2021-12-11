import { O } from 'ts-toolbelt';
import { curried2 } from '../internals/curried2';

/**
 * @description takes a function and an object that is partial of the object that we passes as function argument.
 * @returns a function that takes remaining part of object will invoke the function when you call returned function.
 * @category Object
 * @example
 * ```typescript
 * type Args = {
 *  id:string;
 *  name:string;
 * }
 * function deleteName(x:Args){
 *    delete obj[x.id][x.name]
 * }
 * getNameAndDelete = F.partial_props(deleteName,{id:"111"})
 * getNameAndDelete({name:"pranshu"})
 * ```
 */
export function partial_props<T extends O.Object, T1 extends Partial<T>, R>(
  fn: (x: T) => R,
  intial_object_args: T1
): (later_object_args: O.Exclude<T, T1>) => R;

export function partial_props<T extends O.Object, R>(
  fn: (x: T) => R
): <T1 extends Partial<T>>(
  intial_object_args: T1
) => (later_object_args: O.Exclude<T, T1>) => R;

export function partial_props<T extends O.Object, T1 extends Partial<T>, R>(
  fn: (x: T) => R,
  intial_object_args?: T1
) {
  return curried2(
    function main(fn: (x: T) => R, intial_object_args: T1) {
      return function partially_applied(later_object_args: O.Exclude<T, T1>) {
        return fn(
          Object.assign({ ...intial_object_args, ...later_object_args })
        );
      };
    },
    fn,
    intial_object_args
  );
}
