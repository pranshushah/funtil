import { F } from 'ts-toolbelt';
export function complement<T extends F.Function>(fn: T) {
  return function complemented(...args: Parameters<T>) {
    return !fn(...args);
  };
}
