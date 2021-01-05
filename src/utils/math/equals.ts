import equal from 'fast-deep-equal';
export function equals<T>(y: T) {
  return function eqForX(x: T) {
    return equal(x, y);
  };
}
