import { partial2 } from './internals/partial2';

export function prepend<T>(el: T, arr?: T[]) {
  return partial2(
    function main(el: T, arr: T[]) {
      return [el, ...arr];
    },
    el,
    arr
  );
}
