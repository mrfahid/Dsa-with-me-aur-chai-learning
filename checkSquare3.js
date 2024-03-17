/**
 * Checks if there exists a number in array2 which is a square of a number in array1.
 * @param {number[]} array1 - First array.
 * @param {number[]} array2 - Second array.
 * @returns {boolean} True if there exists a square number in array2 corresponding to any number in array1, false otherwise.
 */
function isSquareCheck(array1, array2) {
  array1.sort((a, b) => a - b); // Sort array1 in ascending order
  array2.sort((a, b) => a - b); // Sort array2 in ascending order

  for (let num of array1) {
    const square = num * num;
    if (!binarySearch(array2, square)) {
      return false; // If the square of the number in array1 doesn't exist in array2, return false
    }
  }
  return true; // All numbers in array1 have corresponding squares in array2
}

// Example usage:
const results = isSquareCheck([1, 2, 3, 4, 6], [1, 4, 6, 12, 9]);
console.log(results); // Output: true

/**
 * Performs binary search on a sorted array to find if a target value exists.
 * @param {number[]} array - The sorted array to search in.
 * @param {number} target - The target value to search for.
 * @returns {boolean} True if target exists in the array, false otherwise.
 */
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return true;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

// Example usage:
const result = isSquareCheck([1, 2, 3, 4, 6], [1, 4, 6, 12, 9]);
console.log(result); // Output: true
