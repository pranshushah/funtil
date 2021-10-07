/**
 * @description Reverses given string or array.
 * @category List
 * @example
 * F.reverse([1,2,3,4]) // [4,3,2,1]
 * F.reverse("mit") // "tim"
 */
export function reverse<T>(xs: T[]): T[];
export function reverse(xs: string): string;

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
