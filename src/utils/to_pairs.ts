import { Obj } from './types';

export function to_pairs<T>(obj: Obj<T>): [string | number, T][] {
  let return_arr: [string | number, T][] = [];
  for (const key_val_arr of Object.entries(obj)) {
    return_arr.push(key_val_arr);
  }
  return return_arr;
}
