/**
 * @alias always
 * @description takes an element returns function that always returns element we pass.
 * @category Function
 * @example
 * ```typescript
 * let todo = {id:1,task:"todo1"};
 * constantTodo = constant(todo);
 * constantTodo(todo) === todo // true;
 * ```
 */
export function constant<T>(v: T) {
  return function value() {
    return v;
  };
}
