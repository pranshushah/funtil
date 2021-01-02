import { O } from 'ts-toolbelt';
export function partial_props<T extends O.Object, T1 extends Partial<T>, R>(
  fn: (x: T) => R,
  intial_object_args: T1
) {
  return function partially_applied(later_object_args: O.Exclude<T, T1>) {
    return fn(Object.assign({ ...intial_object_args, ...later_object_args }));
  };
}
