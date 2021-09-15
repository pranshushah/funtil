/**
 * @description wrapper around {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys|Object.key()}
 */
export function keys<T extends object>(obj: T) {
  return Object.keys(obj);
}
