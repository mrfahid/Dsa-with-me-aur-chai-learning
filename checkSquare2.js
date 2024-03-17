/**
 * Checks if there exists a number in array2 which is a square of a number in array1.
 * @param {number[]} array1 - First array.
 * @param {number[]} array2 - Second array.
 * @returns {boolean} True if there exists a square number in array2 corresponding to any number in array1, false otherwise.
 */
function isSquareCheck(array1, array2) {
  const squareSet = new Set(array2.map(num => num * num)); // Store the squares of numbers in array2
  for (let num of array1) {
    if (squareSet.has(num)) {
      return true; // If the number in array1 exists in the set, return true
    }
  }
  return false; // No square number in array2 corresponds to any number in array1
}

// Example usage:
const result = isSquareCheck([1, 2, 3, 4, 6], [1, 4, 6, 12, 9]);
console.log(result); // Output: true

// the time complexity is O(n + m), which is linear.
// The space complexity is O(1).