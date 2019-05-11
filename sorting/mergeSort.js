const mergeSort = (input, left, right) => {
  if (right > left) {
    let middle = Math.floor(left + (right - left) / 2); 
    mergeSort(input, left, middle);
    mergeSort(input, middle + 1, right);
    merge(input, left, middle, right);
  }

  return input;
}

const merge = (input, left, middle, right) => {
  let leftLength = middle - left + 1;
  let rightLength = right - middle;
  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < leftLength; i++) {
    leftArray[i] = input[left + i];
  }

  for (let i = 0; i < rightLength; i++) {
    rightArray[i] = input[middle + 1 + i];
  }

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftLength && j < rightLength) {
    if (leftArray[i] <= rightArray[j]) {
      input[k] = leftArray[i];
      i++;
    } else {
      input[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftLength) {
    input[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightLength) {
    input[k] = rightArray[j];
    j++;
    k++;
  }
}

const testArray = [4,2,8,8,5,7,1];
console.log(mergeSort(testArray, 0, testArray.length - 1));

