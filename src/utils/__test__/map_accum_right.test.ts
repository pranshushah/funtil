import { map_accum_right } from '../map_accum_right';

it('should work when we pass 3 args', () => {
  function adder(acc: string, x: string): [string, number] {
    return [acc + x, parseInt(acc) + parseInt(x)];
  }
  let result = map_accum_right(adder, '0', ['1', '2', '3', '4']);
  expect(result[0]).toBe('04321');
  expect(result[1]).toEqual([433, 45, 7, 4]);
});

it('should work when we pass 2 args', () => {
  function adder(acc: string, x: string): [string, number] {
    return [acc + x, parseInt(acc) + parseInt(x)];
  }
  let valueGetter = map_accum_right(adder, '0');
  let result = valueGetter(['1', '2', '3', '4']);
  expect(result[0]).toBe('04321');
  expect(result[1]).toEqual([433, 45, 7, 4]);
});

it('should work when we pass 1 args', () => {
  function adder(acc: string, x: string): [string, number] {
    return [acc + x, parseInt(acc) + parseInt(x)];
  }
  let accumGetter = map_accum_right(adder);
  let valueGetter = accumGetter('0');
  let result = valueGetter(['1', '2', '3', '4']);
  expect(result[0]).toBe('04321');
  expect(result[1]).toEqual([433, 45, 7, 4]);
});
