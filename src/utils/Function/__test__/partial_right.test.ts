import { partial_right } from '../partial_right';
it('should work with 2 args', () => {
  function todoLogger(task: string, author: string, done: boolean) {
    return `todo ${task} by ${author} is ${done ? 'done' : 'not Done'}`;
  }
  let todoGetter = partial_right<
    [string, boolean],
    [string],
    typeof todoLogger
  >(todoLogger, 'pranshu', false);
  let result = todoGetter('doing todos');
  expect(typeof result).toBe('string');
  expect(result).toBe('todo doing todos by pranshu is not Done');
});

it('should work with 2 args', () => {
  function todoLogger(task: string, author: string, done: boolean) {
    return `todo ${task} by ${author} is ${done ? 'done' : 'not Done'}`;
  }
  let todoGetter = partial_right<
    [boolean],
    [string, string],
    typeof todoLogger
  >(todoLogger, false);
  let result = todoGetter('doing todos', 'pranshu');
  expect(typeof result).toBe('string');
  expect(result).toBe('todo doing todos by pranshu is not Done');
});
