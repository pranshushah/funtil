import { F, L } from 'ts-toolbelt';
import { Unary } from './types';

type Pipe<T1 extends F.Function, T2 extends L.List<Unary>> = (
  ...args: Parameters<T1>
) => ReturnType<L.Last<T2>>;

export function pipe<T1 extends F.Function, T2 extends L.List<Unary>>(
  fn1: T1,
  ...fns: T2
): Pipe<T1, T2> {
  return function piped(...result: Parameters<T1>) {
    var list = [...fns];
    let returnValue = fn1(...result);
    while (list.length > 0) {
      // take the first function from the list
      // and execute it
      // @ts-ignore
      returnValue = list.shift()(returnValue);
    }
    return result as ReturnType<L.Last<T2>>;
  };
}
