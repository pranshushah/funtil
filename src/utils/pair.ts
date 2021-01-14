import { partial2 } from './internals/partial2';

export function pair<T1, T2>(fst: T1, snd: T2): [T1, T2];
export function pair<T1, T2>(fst: T1): (snd: T2) => [T1, T2];

export function pair<T1, T2>(fst: T1, snd?: T2) {
  return partial2(
    function main(fst: T1, snd: T2) {
      return [fst, snd];
    },
    fst,
    snd
  );
}
