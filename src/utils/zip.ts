import { partial2 } from './internals/partial2';

export function zip<T, G>(arr1: T[], arr2: G[]): [T, G][];
export function zip<T, G>(arr1: T[]): (arr2: G[]) => [T, G][];

export function zip<T, G>(arr1: T[], arr2?: G[]) {
  return partial2(
    function main(arr1: T[], arr2: G[]) {
      let zipped: [T, G][] = [];
      let copiedArr1 = [...arr1];
      let copiedArr2 = [...arr2];

      while (copiedArr1.length > 0 && copiedArr2.length > 0) {
        let c1 = copiedArr1.shift();
        let c2 = copiedArr2.shift();
        if (c1 && c2) {
          zipped.push([c1, c2]);
        }
      }
      return zipped;
    },
    arr1,
    arr2
  );
}
