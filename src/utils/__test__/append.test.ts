import { append } from '../append';

describe('append', () => {
  it('should append to the list and returns new copy', () => {
    const arr = [{ a: 22 }, { a: 122 }, { a: 222 }];
    const result = append(arr, { a: 1111 });
    expect(result.length).toBe(4);
    expect(arr.length).toBe(3);
    expect(result).toEqual([{ a: 22 }, { a: 122 }, { a: 222 }, { a: 1111 }]);

    const empty_arr: string[] = [];
    const result2 = append(empty_arr, '11');
    expect(result2).toEqual(['11']);
  });
});
