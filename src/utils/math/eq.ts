export function eq<T>(y: T) {
  return function eqForX(x: T) {
    return x === y;
  };
}
