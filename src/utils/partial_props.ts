import { O } from 'ts-toolbelt';
import { partial2 } from './internals/partial2';

export function partial_props<T extends O.Object, T1 extends Partial<T>, R>(
  fn: (x: T) => R,
  intial_object_args: T1
): (later_object_args: O.Exclude<T, T1>) => R;

export function partial_props<T extends O.Object, T1 extends Partial<T>, R>(
  fn: (x: T) => R
): (intial_object_args: T1) => (later_object_args: O.Exclude<T, T1>) => R;

export function partial_props<T extends O.Object, T1 extends Partial<T>, R>(
  fn: (x: T) => R,
  intial_object_args?: T1
) {
  return partial2(
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
