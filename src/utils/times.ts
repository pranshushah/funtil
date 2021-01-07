export function times<T>(fn: (arg: number) => T, n: number) {
  let result: T[] = [];
  const length = isFinite(n) && !isNaN(n) ? Math.abs(n) : 0;
  for (let index = 0; index < length; index++) {
    result.push(fn(index));
  }
  return result;
}