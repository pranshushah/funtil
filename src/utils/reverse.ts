/**
 * @description Reverses given string or array.
 * @category List
 */
export function reverse<T>(xs: T[] | string) {
  if (typeof xs === 'string') {
    let reversed = '';
    for (const character of xs) {
      reversed = character + reversed;
    }
    return reversed;
  } else {
    return xs.reverse();
  }
}
