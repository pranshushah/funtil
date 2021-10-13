/**
 * @description takes an element returns function that always returns element we pass.
 * @category Function
 * @example
 * let todo = {id:1,task:"going to school"}
 * let todo1 = F.always(todo)();
 * todo === todo1 // true
 */
export function always<T>(x: T) {
  return function() {
    return x;
  };
}
