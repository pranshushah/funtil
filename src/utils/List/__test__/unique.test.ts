import { unique } from '../unique';

it('should work with primitive type', () => {
  let result = unique([1, 2, 1, 2, 3, 4]);
  expect(result).toEqual([1, 2, 3, 4]);
});

it('should work with reference type', () => {
  let result = unique([
    { id: 1, name: 'pranshu' },
    { id: 2, name: 'mit' },
    { id: 1, name: 'pranshu' },
    { id: 4, name: 'sanket' },
  ]);
  expect(result).toEqual([
    { id: 1, name: 'pranshu' },
    { id: 2, name: 'mit' },
    { id: 4, name: 'sanket' },
  ]);
});
