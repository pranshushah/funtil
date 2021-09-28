import cloned from 'clone-deep';
/**
 * @description takes and element and copies that element and returns it. for reference types it deepcopies the element.
 * @category Function
 * @example
 * let item = {id:1,person:{name:"pranshu"}}
 * let cloned = F.clone(item);
 * cloned === item // false;
 * item.person === item.person // false;
 */
export function clone<T>(x: T) {
  return cloned(x);
}
