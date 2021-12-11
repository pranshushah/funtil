import { curried2 } from '../internals/curried2';
import { L } from 'ts-toolbelt';
/**
 *@description drops elements from last until predication function returns false and it returns new copy of dropped .works also with partial arguments.
 *@category List
 *@example
 *```typescript
 *function isOdd(x:number){
 *  return F.mod(2,x) === 1;
 *}
 *F.drop_last_while(isOdd,[1,2,3,5,7]); //[1,2]
 *F.drop_last_while((s: string) => s !== 'n', 'pranshu'); // 'pran'
 *```
 */
export function drop_last_while<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T>) => boolean,
  xs: T
): T;
export function drop_last_while<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T>) => boolean
): T;
export function drop_last_while(
  predicate_fn: (arg: string) => boolean,
  xs: string
): string;

export function drop_last_while(
  predicate_fn: (arg: string) => boolean
): (xs: string) => string;

export function drop_last_while<T extends any[]>(
  predicate_fn: (arg: L.UnionOf<T> | string) => boolean,
  xs?: T | string
) {
  return curried2(
    function main_drop_last_while(
      predicate_fn: (arg: L.UnionOf<T> | string) => boolean,
      xs: T | string
    ) {
      let last_index = xs.length - 1;
      while (last_index >= 0 && predicate_fn(xs[last_index])) {
        last_index--;
      }
      return xs.slice(0, last_index + 1);
    },
    predicate_fn,
    xs
  );
}
