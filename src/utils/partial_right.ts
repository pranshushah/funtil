/**
 * @description This method is like F.partial except that partially applied arguments are appended to the arguments it receives.type inference is not working as expected so you have to explicitly type genereic i hope we resolve this issue in up coming version.
 * @category Function
 */
export function partial_right<
  P1 extends unknown[],
  P2 extends unknown[],
  F extends (...args: [...P2, ...P1]) => any
>(fn: F, ...intialArgs: P1): (...afterargs: P2) => ReturnType<F> {
  return function partially_applied(...afterargs: P2) {
    return fn(...afterargs, ...intialArgs);
  };
}
