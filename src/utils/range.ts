import { partial2 } from './internals/partial2';
export function range(from: number, to: number): number[];
export function range(from: number): (to: number) => number[];

/**
 * @description returns an array of given range;if given number isNan or Infinity it throws array; also works in partial form.
 */
export function range(from: number, to?: number) {
  return partial2(
    function main(from: number, to: number) {
      if (isNaN(from) || isNaN(to)) {
        throw Error("from or to  can't be NAN");
      }
      if (!Number.isFinite(from) || !Number.isFinite(to)) {
        throw Error("from or to can't be infinity");
      }
      let n = from;
      let result: number[] = [];
      while (n < to) {
        result.push(n);
        n++;
      }
      return result;
    },
    from,
    to
  );
}
