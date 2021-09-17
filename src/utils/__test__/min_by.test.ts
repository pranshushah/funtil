import { min_by } from '../min_by';

it('should work with 3 args', () => {
  function stringLengthGetter(a: string) {
    return a.length;
  }
  let result = min_by(stringLengthGetter, 'pranshu', 'pranshu shah');
  expect(result).toBe('pranshu');
});

it('should work with 2 args', () => {
  function stringLengthGetter(a: string) {
    return a.length;
  }
  let fst = 'pranshu';
  let lastStringGetter = min_by(stringLengthGetter, fst);
  let result = lastStringGetter('pranshu shah');
  expect(result).toBe('pranshu');
});

it('should work with 1 args', () => {
  function stringLengthGetter(a: string) {
    return a.length;
  }
  let stringsGetter = min_by(stringLengthGetter);
  let lastStringGetter = stringsGetter('pranshu shah');
  let result = lastStringGetter('pranshu');
  expect(result).toBe('pranshu');
});
