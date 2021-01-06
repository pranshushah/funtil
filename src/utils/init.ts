export function init<T>(xs: T[]): T[];
export function init(xs: string): string;

export function init<T>(xs: T[] | string) {
  return xs.slice(0, xs.length - 1);
}
