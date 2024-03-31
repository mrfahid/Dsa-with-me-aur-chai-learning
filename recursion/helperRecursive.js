// helperRecursive Function
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// find Odd number with help of recursive helper function

function findOdd(array) {
  // Initialize variable which hold empty array when we find Odd numbers then insert it
  let oddNumbers = [];

  function helperRecursive(inputArray) {
    //Check if inputArray is empty when return
    if (inputArray.length === 0) {
      return;
    }

    // Check if it's not empty when we check array number arr not even then push odd number it to our oddNumbers variable.
    if (inputArray[0] % 2 !== 0) {
      oddNumbers.push(inputArray[0]);
    }

    // call helper Fun loop trough all array elements one by one with help of slice method
    helperRecursive(inputArray.slice(1));
  }

  // Call helper fun with given argument;
  helperRecursive(array);

  // Return oddNumbers
  return oddNumbers;
}

// Call function get result
let result = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log(result);
