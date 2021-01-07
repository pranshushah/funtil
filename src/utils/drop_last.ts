import { partial2 } from './internals/partial2';

export function drop_last<T>(
  number_element_to_drop_from_back: number,
  xs: T[]
): T[];
export function drop_last(
  number_element_to_drop_from_back: number,
  xs: string
): string;

export function drop_last<T>(
  number_element_to_drop_from_back: number,
  xs?: T[] | string
) {
  return partial2(
    function main_drop_last(
      number_element_to_drop_from_back: number,
      xs: T[] | string
    ) {
      const last_index =
        xs.length - number_element_to_drop_from_back < 0
          ? 0
          : xs.length - number_element_to_drop_from_back;
      return xs.slice(0, last_index);
    },
    number_element_to_drop_from_back,
    xs
  );
}
