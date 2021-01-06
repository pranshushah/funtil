export function head(str: string): string;
export function head<T>(list: readonly T[]): T | undefined;

export function head<T>(xs: readonly T[] | string) {
  if (Array.isArray(xs)) {
    return xs[0];
  } else {
    return xs.charAt(0);
  }
}