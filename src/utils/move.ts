import { partial3 } from './internals/partial3';

/**
 * @description Move an item, at index from, to index to, in a list of elements. A new list will be created containing the new elements order.
 */
export function move<T>(from: number, to: number, list: T[]): T[];
export function move<T>(from: number, to: number): (list: T[]) => T[];
export function move<T>(
  from: number
): {
  (to: number, list: T[]): T[];
  (to: number): (list: T[]) => T[];
};

export function move<T>(from: number, to?: number, list?: T[]) {
  return partial3(
    function main(from: number, to: number, list: T[]) {
      const length = list.length;
      let result = list.slice(0, list.length);
      const positiveFrom = from < 0 ? length + from : from;
      const positiveTo = to < 0 ? length + to : to;
      let item = result.splice(positiveFrom, 1);

      return positiveFrom < 0 ||
        positiveFrom >= list.length ||
        positiveTo < 0 ||
        positiveTo >= list.length
        ? list
        : [
            ...result.slice(0, positiveTo),
            ...item,
            ...result.slice(positiveTo, list.length),
          ];
    },
    from,
    to,
    list
  );
}
