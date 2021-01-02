import { F } from 'ts-toolbelt';

export function uncurry<F1 extends F.Function>(fn: F.Curry<F1>): F.UnCurry<F1> {
  // @ts-ignore-start
  return function uncurried(...args: any[]) {
    let ret: any = fn;
    for (let arg of args) {
      ret = ret(arg);
    }
    return ret;
  };
  // @ts-ignore-end
}
