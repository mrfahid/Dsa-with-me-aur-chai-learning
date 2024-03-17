// Problem statement is We going to check anangram for two string if both string is equal length and same characters? 

// let's dive in to code.
// we are gong to make logic in text.
// like we have two strings same characters and equal length 
// "coders" "sredoc"

// Define  a function that takes two strings as input parameters,
function  checkAnagramInStrings(str1, str2) {
  // First step is to check if the lengths is  equal or not. If they are not equal then return false; 
  if (str1.length != str2.length) {
    console.log(`string one length is: ${str1.length} string two length is: ${str2.length} both string length is not equal`)
    return false
  }

  let charStr1 = {}
  for(let letter of str1) {
    charStr1[letter] = (charStr1[letter] || 0) + 1
  }
  // console.log(charStr1)

  for (let item of str2) {
    // if any character from second string is missing in first string then return false
    if (!charStr1[item]) {
      console.log(item +"is missing in "+ str1);
      
      return false
    }

    charStr1[item] -= 1
  }
  // if all checks pass then both strings are equal then return true
  return true
}

let result =  checkAnagramInStrings('coders', 'sredoc')
console.log(result)

// Time Complexity: The time complexity of my function is O(n), where n is the length of the input strings. This is because I is iterating over each string once. The first loop goes through str1 and the second loop goes through str2.

// Space Complexity: The space complexity of my function is also O(n), where n is the length of the input strings. This is because I have creating an object charStr1 that can potentially have a key-value pair for each character in str1.