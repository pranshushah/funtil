export function take<T>(number_of_elements_you_want: number, xs: T[]): T[];

export function take<T>(
  number_of_elements_you_want: number,
  xs: string
): string;

export function take<T>(number_of_elements_you_want: number, xs: T[] | string) {
  return xs.slice(
    0,
    number_of_elements_you_want < 0 ? xs.length : number_of_elements_you_want
  );
}