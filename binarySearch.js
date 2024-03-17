// <<<<<<<<<<<<<  ✨ BinarySearch  >>>>>>>>>>>>>>
/**
+ * Performs a binary search on the provided array to find the index of the specified number.
+ *
+ * @param {Array} array - The array to be searched.
+ * @param {number} number - The number to be found within the array.
+ * @return {number} The index of the specified number within the array, or -1 if the number is not found.
+ */

// <<<<<   TODO: SOLUTION  >>>>>
function binarySearch(array, number) {
  let min = 0;
  let max = array.length - 1;
  console.log(`Starting search with min: ${min} max: ${max}`);

  while (min <= max) {
    let middleIndex = Math.floor((min + max) / 2);
    console.log(`Current middleIndex is ${middleIndex}`);

    if (array[middleIndex] < number) {
      console.log(
        `Middle value is less than search value, incrementing min to ${
          middleIndex + 1
        }`
      );
      min = middleIndex + 1;
    } else if (array[middleIndex] > number) {
      console.log(
        `Middle value is greater than search value, decrementing max to ${
          middleIndex - 1
        }`
      );
      max = middleIndex - 1;
    } else {
      console.log(`Found match at index ${middleIndex}`);
      return middleIndex;
    }
  }
  
  console.log(`Search complete, no match found`);
  return -1;
}

const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);

console.log(result); // 6

// Time Complexity: O(log n) (where 'n' is the length of the array).
// Space Complexity: O(1) (constant space).

//  binary search algorithm is efficient with a logarithmic time complexity, making it suitable for searching in large sorted arrays. Well done!
