export function reverse<T>(xs: T[] | string) {
  if (typeof xs === 'string') {
    return xs
      .split('')
      .reverse()
      .join('');
  } else {
    return xs.reverse();
  }
}
