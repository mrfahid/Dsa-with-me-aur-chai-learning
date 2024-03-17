// Problem statement counting unique elements in the array
// array [1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 10, 10]

// Define a function that takes an array in parameter
function countUnique(array) {
  if (array.length) {
    // Initialize an index variable i to keep track of the unique elements
    let i = 0;
    // Iterate through the array using a loop, comparing adjacent elements
    for (let j = 1; j < array.length; j++) {
      // If the current element is different from the next element, I increment i and update the array at index i with the next element.
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    // Finally, I return i + 1 as the count of unique elements.
    return i + 1;
  } else {
    throw new Error("Array is empty");
  }
}

let result = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9, 9]);
console.log(`Unique elements count: ${result}`);

// linear time complexity is O(N)
// Thus, the space complexity is constant or O(1).
