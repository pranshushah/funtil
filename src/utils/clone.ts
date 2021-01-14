import cloned from 'clone-deep';
/**
 * @description takes and element and copies that element and returns it. for reference types it deepcopies the element.
 */
export function clone<T>(x: T) {
  return cloned(x);
}
