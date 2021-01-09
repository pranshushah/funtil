export function prop_satisfies<T extends object, K extends keyof T>(
  pre: (arg: T[K]) => boolean,
  key: K,
  obj: T
) {
  return pre(obj[key]);
}
