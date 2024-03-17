/**
 * Array bubble sorting algorithm.
 * @param {number[]} array - The array to be sorted.
 * @returns {void}
 */
function arrayBubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array);
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        // Swapping elements
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

// Example Usage:
const arr = [30, 20, 12, 40, 33, 35];
arrayBubbleSort(arr);
console.log(arr);

// Time Complexity: O(n^2) - The worst and average-case time complexity is O(n^2), where n is the number of items being sorted.
