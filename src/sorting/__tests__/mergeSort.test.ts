import { mergeSortIteratively } from '../mergeSort';

describe('it should sort iteratively', () => {
  it('should return the original array if only one item is in the array', () => {
    const input = [1];
    const expected = [1];

    mergeSortIteratively(input);

    expect(input).toEqual(expected);
  });

  it('should successfully sort an array with 2 items', () => {
    const input = [2,1];
    const expected = [1,2];

    mergeSortIteratively(input);

    expect(input).toEqual(expected);
  });
});