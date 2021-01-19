import { default_to } from '../default_to';

it('returns passed value ', () => {
  const defaultTo100 = default_to(100);
  expect(defaultTo100('boom')).toBe('boom');
});

it('returns default value ', () => {
  const defaultTo100 = default_to(100);
  const r = defaultTo100(NaN);
  expect(r).toBe(100);
});
