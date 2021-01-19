import { compose } from '../compose';

it('checking compose', () => {
  function upper(x: string) {
    return x.toUpperCase();
  }
  const greeting = (first: string, last: string) => first + last;
  const cc = compose(upper, greeting);
  expect(cc('pranshu', 'shah')).toBe('PRANSHUSHAH');
});
