import { always } from '../always';

describe('always', () => {
  it('always should return same value when called the returned function', () => {
    const obj = { a: 1, b: 5 };
    const check_obj = always(obj);
    expect(obj).toBe(check_obj());

    const arr = [1, 2, 3, 5];
    const check_arr = always(arr);
    expect(arr).toBe(check_arr());

    const date = new Date();
    const check_date = always(date);
    expect(date).toBe(check_date());

    const check_undeifined = always(undefined);
    expect(check_undeifined()).toBe(undefined);

    const check_str = always('hello');
    expect(check_str()).toBe('hello');
  });
});
