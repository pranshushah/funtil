import { partial_props } from '../partial_props';

it('should work with 2 args', () => {
  type Todo = {
    id: string;
    author: string;
    task: string;
    done: boolean;
  };
  function todoLogger(todo: Todo) {
    return `todo ${todo.task} by ${todo.author} is ${
      todo.done ? 'done' : 'not Done'
    }`;
  }
  let pratialTodoLogger = partial_props(todoLogger, {
    id: '11',
    author: 'zoom',
  });
  let result = pratialTodoLogger({ task: 'i am doing task', done: false });
  expect(typeof result).toBe('string');
});

it('should work with 1 arg', () => {
  type Todo = {
    id: string;
    author: string;
    task: string;
    done: boolean;
  };
  function todoLogger(todo: Todo) {
    return `todo ${todo.task} by ${todo.author} is ${
      todo.done ? 'done' : 'not Done'
    }`;
  }
  let getTodoArg = partial_props(todoLogger);
  let partialTodoLogger = getTodoArg({ task: 'i am doing task', done: false });
  let result = partialTodoLogger({ id: '11', author: 'zoom' });
  expect(typeof result).toBe('string');
});
