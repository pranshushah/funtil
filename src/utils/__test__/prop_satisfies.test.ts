import { prop_satisfies } from '../prop_satisfies';

it('should work with 3 args', () => {
  type Todo = {
    id: string;
    name: string;
  };
  function longNameChecker(todo: Todo) {
    return todo.name.length > 10;
  }
  let result = prop_satisfies(longNameChecker, 'name', {
    id: '12',
    name: 'boom',
  });
  expect(result).toBe(false);
});

it('should work with 2 args', () => {
  type Todo = {
    id: string;
    name: string;
  };
  function longNameChecker(todo: Todo) {
    return todo.name.length > 10;
  }
  let objGetter = prop_satisfies(longNameChecker, 'name');
  let result = objGetter({
    id: '12',
    name: 'boom',
  });
  expect(result).toBe(false);
});

it('should work with 1 arg', () => {
  type Todo = {
    id: string;
    name: string;
  };
  function longNameChecker(todo: Todo) {
    return todo.name.length > 10;
  }
  let keyAndobjGetter = prop_satisfies(longNameChecker);
  let result = keyAndobjGetter('name', {
    id: '12',
    name: 'boom',
  });
  expect(result).toBe(false);
  let objGetter = keyAndobjGetter('name');
  result = objGetter({ id: '12', name: 'pranshu' });
  expect(result).toBe(false);
});
