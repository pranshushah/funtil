import { zip_obj } from '../zip_obj';

it('should work when 2 args are passed', () => {
  let result = zip_obj(['id', 'name'], [11, 'pranshu shah']);
  expect(result).toEqual({ id: 11, name: 'pranshu shah' });
});

it('should work when 1 arg are passed', () => {
  let zipValue = zip_obj(['id', 'name']);
  let result = zipValue([11, 'pranshu shah']);
  expect(result).toEqual({ id: 11, name: 'pranshu shah' });
});
