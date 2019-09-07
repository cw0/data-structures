const swap = require('./swap');

const selectionSort = (input, lastSortedIndex = 0) => {
  if (input.length <= 1) return input;

  let minimum = null;
  let minimumIndex = null;

  for (let i = lastSortedIndex; i < input.length; i++) {
    if (minimum === null || input[i] < minimum) {
      minimum = input[i];
      minimumIndex = i;
    }
  }

  swap(input, lastSortedIndex, minimumIndex);

  if (lastSortedIndex < input.length - 1) {
    return (selectionSort(input, lastSortedIndex + 1));
  }

  return input;
};

console.log(selectionSort([4, 2, 8, 8, 5, 7, 1]));
