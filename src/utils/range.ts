import { partial2 } from './internals/partial2';

export function range(from: number, to?: number) {
  return partial2(
    function main(from: number, to: number) {
      if (isNaN(from) || isNaN(to)) {
        throw Error("from or to  can't be NAN");
      }
      if (!isFinite(from) || !isFinite(to)) {
        throw Error("from or to can't be infinity");
      }
      let n = from;
      let result: number[] = [];
      while (n < from) {
        result.push(n);
        n++;
      }
      return result;
    },
    from,
    to
  );
}
