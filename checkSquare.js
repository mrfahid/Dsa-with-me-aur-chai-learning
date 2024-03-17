/**
 * Checks if there exists a number in array2 which is a square of a number in array1.
 * @param {number[]} array1 - First array.
 * @param {number[]} array2 - Second array.
 * @returns {boolean} True if there exists a square number in array2 corresponding to any number in array1, false otherwise.
 */
function isSquareCheck(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let isSquare = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] * array1[i] === array2[j]) { 
        // Checking if square
        isSquare = true;
        break; // Found a square, no need to continue checking
      }
    }
    if (!isSquare) {
      return false; // If no square found for current number in array1, return false
    }
  }
  return true; // All numbers in array1 have corresponding squares in array2
}

// Example usage.
const result = isSquareCheck([1, 2, 3, 4, 6], [1, 4, 6, 12, 9]);
console.log(result); // Output: true

// Time complexity of the algorithm is quadratic, O(n * m), not linear.
// Space complexity is O(1).