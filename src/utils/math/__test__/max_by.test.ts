import { max_by } from '../max_by';

it('should work with 3 args', () => {
  function stringLengthGetter(a: string) {
    return a.length;
  }
  let result = max_by(stringLengthGetter, 'pranshu', 'pranshu shah');
  expect(result).toBe('pranshu shah');
});

it('should work with 2 args', () => {
  function stringLengthGetter(a: string) {
    return a.length;
  }
  let fst = 'pranshu';
  let lastStringGetter = max_by(stringLengthGetter, fst);
  let result = lastStringGetter('pranshu shah');
  expect(result).toBe('pranshu shah');
});

it('should work with 1 args', () => {
  function stringLengthGetter(a: string) {
    return a.length;
  }
  let stringsGetter = max_by(stringLengthGetter);
  let lastStringGetter = stringsGetter('pranshu shah');
  let result = lastStringGetter('pranshu');
  expect(result).toBe('pranshu shah');
});
