import { compact } from '../compact';

it('removes falsy values in list', () => {
  const check_list = [1, 2, 4, undefined, null, ''];
  const result = compact(check_list);
  expect(result.length).toBe(3);
  expect(result).toEqual([1, 2, 4]);
});
