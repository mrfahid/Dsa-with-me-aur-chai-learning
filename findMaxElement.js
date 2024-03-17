/**
 * Finds the maximum element in an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The maximum element in the array.
 */
function findMaxElement(arr) {
  if (arr.length === 0) {
    throw new Error("array is Empty");
  }

  let maximum = arr[0]; // Assume first number is maximum initially

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i]; // Update maximum if current number is greater than maximum
    }
  }
  return maximum; // Return maximum element in array if current number is greater than maximum
}

// Example usage:
const numbers = [3, 8, 1, 10, 5];
const maxNumber = findMaxElement(numbers);
console.log("Maximum number:", maxNumber); // Output: Maximum number: 10

// Time Complexity: O(n) (linear time complexity)
// Space Complexity: O(1) (constant space complexity)