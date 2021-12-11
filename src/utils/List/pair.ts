import { curried2 } from '../internals/curried2';

/**
 * @description takes couple argument and returns tuple of that arguments; also works with partial form.
 * @category List
 * @example
 * ```typescript
 * F.pair("pranshu","shah") ["pranshu","shah"];
 * F.pai({auth:true},{premium:false}) [{auth:true},{premium:false}]
 * ```
 */
export function pair<T1, T2>(fst: T1, snd: T2): [T1, T2];
export function pair<T1>(fst: T1): <T2>(snd: T2) => [T1, T2];

export function pair<T1, T2>(fst: T1, snd?: T2) {
  return curried2(
    function main(fst: T1, snd: T2) {
      return [fst, snd];
    },
    fst,
    snd
  );
}
