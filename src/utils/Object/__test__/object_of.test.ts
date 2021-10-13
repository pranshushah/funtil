import { object_of } from '../object_of';

it('create object with different types', () => {
  let result: any = object_of(3, 'hello');
  expect(result).toEqual({ 3: 'hello' });
  result = object_of('id', 222);
  expect(result).toEqual({ id: 222 });
  function zz() {}
  result = object_of('f', zz);
  expect(result).toEqual({ f: zz });
});
