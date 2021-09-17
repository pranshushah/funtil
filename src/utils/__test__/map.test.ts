import { map } from '../map';

it('should work with 2 args', () => {
  type Todo = {
    id: string;
    task: string;
  };
  function todoMapper(todo: Todo) {
    return todo.task;
  }
  let result = map(todoMapper, [
    { id: '1', task: 'l1' },
    { id: '2', task: 'l2' },
    { id: '2', task: 'l3' },
  ]);
  expect(result).toEqual(['l1', 'l2', 'l3']);
});

it('should work with 1 args', () => {
  type Todo = {
    id: string;
    task: string;
  };
  function todoMapper(todo: Todo) {
    return todo.task;
  }
  let ArrayGetter = map(todoMapper);
  let result = ArrayGetter([
    { id: '1', task: 'l1' },
    { id: '2', task: 'l2' },
    { id: '2', task: 'l3' },
  ]);
  expect(result).toEqual(['l1', 'l2', 'l3']);
});
