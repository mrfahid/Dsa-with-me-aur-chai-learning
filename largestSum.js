// <<<<<<<<<<<<<  ✨   >>>>>>>>>>>>>>
// [1,3, 4, 6, 7, 8, 9, 10, 11, 12] => Total elements - 10
// Count largest sum of consecutive digits.
// num = 4
// sum =

// conditions
// num = array => error message

/**
+ * Function to find the largest sum of a contiguous subarray of length num within the given array.
+ *
+ * @param {Array} array - The input array
+ * @param {number} num - The length of the contiguous subarray
+ * @return {number} The largest sum of the contiguous subarray
+ */

// <<<<<   TODO: SOLUTION:  >>>>>
function findLargest(array, num) {
  if (num > array.length) {
    throw new Error("num is greater than array length");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        console.log("i: " + i + " J: " + j);
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

let result = findLargest([1, 3, 4, 6, 7, 8, 9, 10, 11, 12], 4);
console.log(result);

// Time Complexity: O(n * num) (where 'n' is the length of the array and 'num' is the specified subarray length).

// Space Complexity: O(1) (constant space)
