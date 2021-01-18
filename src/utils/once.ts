/**
 * @description takes and function as an argument and returns a function that takes arguments for function we passed and invokes that function only once.
 */
export function once<F extends (...a: readonly any[]) => any>(fn: F) {
  let calculated = false;
  let result: ReturnType<F>;
  return function main(...args: Parameters<F>) {
    if (!calculated) {
      result = fn(...args);
      calculated = true;
    }
    return result;
  };
}
