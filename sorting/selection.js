// Here's an example with the array [7, 2, 5, 1, 9]:

// Initial array: [7, 2, 5, 1, 9]
// Find smallest element: Compare 7 with 2, 5, 1, and 9. Swap 1 with 7.
// Array after first pass: [1, 2, 5, 7, 9]
// Find smallest element: Compare 2 with 5, 7, and 9. No swap needed.
// Array after second pass: [1, 2, 5, 7, 9]
// Find smallest element: Compare 5 with 7 and 9. No swap needed.
// Array after third pass: [1, 2, 5, 7, 9]
// Find smallest element: Compare 7 with 9. No swap needed.
// Array after fourth pass: [1, 2, 5, 7, 9]
// The array [1, 2, 5, 7, 9] is now sorted using selection sort.

function selectionSort(array) {
  if (array.length === 0) {
    return -1;
  }
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (i !== min) {
      temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

let res = selectionSort([7, 2, 5, 1, 9]);
console.log(res); // outPut [ 1, 2, 5, 7, 9 ]

// The time complexity of selection sort is O(n^2), where n is the number of elements in the array. This is because for each element, we need to compare it with every other element to find the smallest (or largest) element. In the worst-case scenario, where the array is in reverse order, selection sort would require n(n-1)/2 comparisons and n swaps.
