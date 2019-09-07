const swap = require('./swap');

const bubbleSort = (input) => {
  if (input.length <= 1) return input;

  let shouldRepeat = false;

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] > input[i + 1]) {
      swap(input, i, i + 1);
      shouldRepeat = true;
    }
  }

  if (shouldRepeat) {
    return bubbleSort(input);
  }

  return input;
};

console.log(bubbleSort([4, 2, 8, 8, 5, 7, 1]));
