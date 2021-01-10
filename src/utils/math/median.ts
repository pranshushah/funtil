import { mod } from './mod';

export function median(list: number[]) {
  if (list.length === 0) {
    return NaN;
  } else if (list.length === 1) {
    return list[0];
  } else {
    const sortedlist = list.sort(function cb(a, b) {
      return a - b;
    });
    const middle =
      mod(2, list.length) === 1
        ? Math.floor(sortedlist.length / 2)
        : sortedlist.length / 2 - 1;

    return sortedlist[middle];
  }
}
