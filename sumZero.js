// problem statement 1: The first problem was about finding a pair of elements in an array that sum to zero. 

// my array is [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 8,]
// [ -4, 4 ] output

// This function takes an array as input
function getPairZero(array) {
  // This loop goes through each element in the array
  for (let number of array) {
    // This nested loop starts from the second element and goes through the rest of the array
    for (let j = 1; j < array.length; j++) {
      // If the sum of the outer loop element and the inner loop element is zero
      if (number + array[j] === 0) {
        // It returns the pair of elements
        return [number, array[j]];
      }
    }
  }
  // If no pair is found, return null
  return null;
}

// The function is called with an array as argument
const result = getPairZero([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 8]);
// The result is logged to the console
console.log(result); // [ -4, 4 ]

// Time Complexity: The quadratic time complexity of this code is  O(n2) because there are two loops running inside a single function.
// Space Complexity: The space complexity of this code is O(1)  because it uses a constant amount of extra space.

// A more efficient solution to this problem would be to use a two-pointer technique. This approach assumes that the input array is sorted. If the array is not sorted, you can sort it first,

// which would take O(nlogn) time complxity because sort() method uses sorting algorithm like quicksort

// Here’s how we can do it:

function sumZeroOpti(array) {
  // Initialize two pointers at the start and end of the array
  let start = 0;
  let end = array.length - 1;

  // While the start pointer is less than the end pointer
  while (start < end) {
    // Calculate the sum of the elements at the start and end pointers
    let sum = array[start] + array[end];

    // If the sum is zero, we have found a pair
    if (sum === 0) {
      return [array[start], array[end]];
    } else if (sum < 0) {
      // If the sum is less than zero, move the start pointer forward
      start++;
    } else {
      // If the sum is greater than zero, move the end pointer backward
      end--;
    }
  }

  // If no pair is found, return null
  return null;
}

const results = sumZeroOpti([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 8]);
console.log(results); // [ -4, 4 ]

// This algorithm works by starting with the smallest and largest elements and gradually moving towards the center of the array. The linear time complexity is O(n)


// where is the length of the array, because in the worst case, each element is visited once. The space complexity is still O(1)

// as no additional space is required that grows with the input size. This is a significant improvement over the original O(n2)

// time complexity. Note that if the array is not sorted, you would need to sort it first, which would take O(nlogn)

// time. So, the overall time complexity would be O(nlogn)

// in that case. But if the array is already sorted, then the time complexity is O(n)
