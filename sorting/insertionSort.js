const insertionSort = (input) => {
  if (input.length <= 1) return input;

  for (let i = 1; i < input.length; i++) {
    let last = input[i];
    let testIndex = i - 1;
    while (testIndex >= 0 && input[testIndex] > last) {
      input[testIndex + 1] = input[testIndex];
      testIndex--;
    }

    input[testIndex + 1] = last;
  }

  return input;
}

console.log(insertionSort2([4,2,8,8,5,7,1]));

const recursiveInsertionSort = (input, n = input.length) => {
  if (n <= 1) return input;
  recursiveInsertionSort(input, n - 1);

  let last = input[n - 1];
  let test = n - 2;

  while (test >= 0 && input[test] > last) {
    input[test + 1] = input[test];
    test --;
  }

  input[test + 1] = last;

  return input;
}

console.log(recursiveInsertionSort([4,2,8,8,5,7,1]));