let array = [2, 1, 4, 3];
let myNewArray = [];

function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

function sortCheck(array, i = 0, j = 1) {
  if (isSorted(array)) {
    myNewArray = array.slice(); // Make a copy of the sorted array
    return;
  }

  if (array[i] > array[j]) {
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    console.log("Array sort")
  }

  if (j < array.length - 1) {
    console.log("Array increase")
    sortCheck(array, i + 1, j + 1); // Recursive call with updated indices
  } else {
    console.log("Array default")
    sortCheck(array, 0, 1); // Restart sorting from the beginning
  }
}

sortCheck(array);
console.log(myNewArray);
