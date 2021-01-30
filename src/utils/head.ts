export function head(str: string): string;
export function head<T>(list: readonly T[]): T | undefined;
/**
 * @description takes an array or string and returns first element of it.
 * @param xs string or array
 */
export function head<T extends readonly any[]>(xs: T | string) {
  if (typeof xs === 'string') {
    return xs.charAt(0);
  } else {
    return xs[0];
  }
}
