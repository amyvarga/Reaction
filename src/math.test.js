import { sum } from './math';

describe('examining the syntax of Jest tests', () => {
  it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
  });
});