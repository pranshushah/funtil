import { F } from 'ts-toolbelt';
/**
 * @description flexible curry function that can take multiple arguments at time.
 * @param fn function you want to curried.
 * @param arity number of arguments it will take
 * @category Function
 * @example
 * function multiplyThreeNumbers(a:number,b:number,c:number){
 *    return a * b * c;
 * }
 * let curriedMultiply = F.curry(multiplyThreeNumbers);
 * let a = curriedMultiply(3,4);
 * a(2) // 24
 */
export function curry<Fn extends F.Function>(
  fn: Fn,
  arity = fn.length
): F.Curry<Fn> {
  // @ts-ignore-start
  return (function next_curried(previous_args: any[]) {
    return function curried(...next_arg: any[]) {
      let args = [...previous_args, ...next_arg];
      if (args.length >= arity) {
        return fn(...args);
      } else {
        return next_curried(args);
      }
    };
  })([]);
  // @ts-ignore-end
}
