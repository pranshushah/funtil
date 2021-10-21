/**
 * @description takes an array or string and returns first element of it.
 * @category List
 * @example
 * ```typescript
 * F.head("pranshu") // "p"
 * F.head([1,2,3]) // 1
 * ```
 */
export function head(str: string): string;
export function head<T>(list: readonly T[]): T | undefined;
export function head<T extends readonly any[]>(xs: T | string) {
  if (typeof xs === 'string') {
    return xs.charAt(0);
  } else {
    return xs[0];
  }
}
