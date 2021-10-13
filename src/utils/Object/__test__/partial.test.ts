import { partial } from '../../Function/partial';

it('should work with 2 args', () => {
  function todoLogger(task: string, author: string, done: boolean) {
    return `todo ${task} by ${author} is ${done ? 'done' : 'not Done'}`;
  }
  let todoDoneGetter = partial(todoLogger, 'hello', 'pranshu');
  let result = todoDoneGetter(false);
  expect(result).toBe('todo hello by pranshu is not Done');
});

it('should work with 2 args', () => {
  function todoLogger(task: string, author: string, done: boolean) {
    return `todo ${task} by ${author} is ${done ? 'done' : 'not Done'}`;
  }
  let todoDoneGetter = partial(todoLogger, 'hello');
  let result = todoDoneGetter('pranshu', false);
  expect(result).toBe('todo hello by pranshu is not Done');
});
