import { none } from '../none';

it('todo example', () => {
  type todo = { id: number; done: boolean };
  let todos: todo[] = [
    { id: 11, done: false },
    { id: 12, done: false },
    { id: 13, done: true },
    { id: 14, done: false },
  ];
  function doneChecker(todo: todo) {
    return todo.done === true;
  }
  let todosDoneChecker = none(doneChecker);
  expect(todosDoneChecker(todos)).toBe(false);
  todos = [
    { id: 11, done: false },
    { id: 12, done: false },
    { id: 13, done: false },
    { id: 14, done: false },
  ];
  expect(todosDoneChecker(todos)).toBe(true);
});
