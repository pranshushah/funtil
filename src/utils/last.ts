export function last<T>(xs: T[]): T | undefined;
export function last(xs: string): string;

export function last<T>(xs: T[] | string) {
  if (Array.isArray(xs)) {
    return xs[xs.length - 1];
  } else {
    return xs.charAt(xs.length - 1);
  }
}
