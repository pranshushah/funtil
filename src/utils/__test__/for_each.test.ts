import { for_each } from '../for_each';

it('it should return new obj by iterating over the array', () => {
  const obj: Record<string | number, any> = {};
  for_each(
    function(val: number) {
      obj[val] = val * 2;
    },
    [1, 2, 4]
  );
  expect(obj).toEqual({ 1: 2, 2: 4, 4: 8 });
});

it('it should return original array', () => {
  const obj: Record<string | number, any> = {};
  const arr = [1, 2, 4];
  const im_arr = for_each(function(val: number) {
    obj[val] = val * 2;
  }, arr);
  expect(obj).toEqual({ 1: 2, 2: 4, 4: 8 });
  expect(arr).toEqual(im_arr);
});
