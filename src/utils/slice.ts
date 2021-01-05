export function slice<T>(from_index: number, to_index: number, xs: T[]): T[];
export function slice(from_index: number, to_index: number, xs: string): string;

export function slice<T>(
  from_index: number,
  to_index: number,
  xs: T[] | string
) {
  return xs.slice(from_index, to_index);
}
