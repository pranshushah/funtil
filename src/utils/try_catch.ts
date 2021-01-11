import { partial2 } from './internals/partial2';

export function try_catch<
  F extends (...args: any[]) => any,
  F1 extends (x: unknown, ...args: Parameters<F>) => any
>(
  tryer: F,
  catcher: F1
): (args: [Parameters<F>, Parameters<F1>]) => ReturnType<F1> | ReturnType<F>;

export function try_catch<
  F extends (...args: any[]) => any,
  F1 extends (x: unknown, ...args: Parameters<F>) => any
>(
  tryer: F
): (
  catcher: F1
) => (args: [Parameters<F>, Parameters<F1>]) => ReturnType<F1> | ReturnType<F>;

export function try_catch<
  F extends (...args: any[]) => any,
  F1 extends (x: unknown, ...args: Parameters<F1>) => any
>(tryer: F, catcher?: F1) {
  return partial2(
    function main(tryer: F, catcher: F1) {
      return function(args: [Parameters<F>, Parameters<F1>]) {
        try {
          return tryer(...args[0]);
        } catch (e) {
          return catcher(e, ...args[1]);
        }
      };
    },
    tryer,
    catcher
  );
}
