export function update<T>(n: number, el: T, elements: readonly T[]) {
  let result = elements.slice();
  const index =
    n < 0 || !isNaN(n) || n >= result.length ? result.length - 1 : n;
  result[index] = el;
  return el;
}
