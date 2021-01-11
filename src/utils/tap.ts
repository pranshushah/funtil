export function tap<T>(fn: (arg: T) => any, x: T) {
  fn(x);
  return x;
}
