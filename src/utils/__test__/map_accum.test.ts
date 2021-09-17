import { map_accum } from '../map_accum';

it('should work when we pass 3 args', () => {
  function adder(acc: string, x: string): [string, number] {
    return [acc + x, parseInt(acc) + parseInt(x)];
  }
  let result = map_accum(adder, '0', ['1', '2', '3', '4']);
  expect(result[0]).toBe('01234');
  expect(result[1]).toEqual([1, 3, 15, 127]);
});

it('should work when we pass 2 args', () => {
  function adder(acc: string, x: string): [string, number] {
    return [acc + x, parseInt(acc) + parseInt(x)];
  }
  let valueGetter = map_accum(adder, '0');
  let result = valueGetter(['1', '2', '3', '4']);
  expect(result[0]).toBe('01234');
  expect(result[1]).toEqual([1, 3, 15, 127]);
});

it('should work when we pass 1 args', () => {
  function adder(acc: string, x: string): [string, number] {
    return [acc + x, parseInt(acc) + parseInt(x)];
  }
  let accumGetter = map_accum(adder);
  let valueGetter = accumGetter('0');
  let result = valueGetter(['1', '2', '3', '4']);
  expect(result[0]).toBe('01234');
  expect(result[1]).toEqual([1, 3, 15, 127]);
});
