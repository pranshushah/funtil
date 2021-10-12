import { last_index_of } from '../last_index_of';

it('should work with primitive types', () => {
  let last33 = last_index_of(33);
  expect(last33([1, 2, 4, 33, 6, 7, 33])).toBe(6);
  expect(last33([1, 2, 4, 6, 7])).toBe(-1);
});

it('should work with objects and array', () => {
  let last11 = last_index_of({ id: 11 });
  expect(
    last11([{ id: 1 }, { id: 11 }, { id: 111 }, { id: 11 }, { id: 1 }])
  ).toBe(3);
  expect(last11([{ id: 1 }, { id: 111 }, { id: 1 }])).toBe(-1);
});
