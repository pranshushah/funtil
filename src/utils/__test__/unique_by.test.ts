import { uniq_by } from '../uniq_by';

type Name = {
  id: string;
  name: string;
};

function nameGetter(x: Name) {
  return x.name;
}

it('should work with 2 args', () => {
  let result = uniq_by(nameGetter, [
    { id: '1', name: 'pranshu' },
    { id: '1', name: 'mit' },
    { id: '1', name: 'pranshu' },
    { id: '1', name: 'smit' },
  ]);
  expect(result).toEqual(['pranshu', 'mit', 'smit']);
});

it('should work with 1 args', () => {
  let arrayGetter = uniq_by(nameGetter);
  let result = arrayGetter([
    { id: '1', name: 'pranshu' },
    { id: '1', name: 'mit' },
    { id: '1', name: 'pranshu' },
    { id: '1', name: 'smit' },
  ]);
  expect(result).toEqual(['pranshu', 'mit', 'smit']);
});
