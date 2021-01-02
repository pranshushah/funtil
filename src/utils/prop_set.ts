import { O } from 'ts-toolbelt';
export function prop_set<T extends O.Object, R extends O.Keys<T>>(
  key: R,
  obj: T,
  val: T[R]
) {
  const ret = { ...obj };
  ret[key] = val;
  return ret;
}
