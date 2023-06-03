//1.Find the minimum and maximum elements in array.

// function minMaxValue(arr) {
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return { min, max };
// }

// const arr = [1, 2, 3, 5, 4, 6, 7];

// const result = minMaxValue(arr);

// console.log(result);

//2. Reverse an array
// function reverseAnArray(arr) {
//   let reversedeArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedeArray.push(arr[i]);
//   }
//   return reversedeArray;
// }

// const arr = [1, 2, 3, 5, 4, 6, 7];
// const result = reverseAnArray(arr);
// console.log(result);

//inbuilt methods

// const reverseArray = (arr) => {
//   return arr.reverse();
// };

// const arr = [1, 2, 3, 5, 4, 6, 7];
// const result = reverseArray(arr);

// console.log(result);

//3.Find the sum of all Elements in array

// function sumAllElements(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// //using reduce method
// function reduce(arr) {
//   const result = arr.reduce((sum, arr) => (sum += arr), 0);

//   return result;
// }

// const arr = [1, 2, 3, 5];
// const result = sumAllElements(arr);
// const result1 = reduce(arr);
// console.log(result, result1);

//4.Remove Duplicates from an Array
//creating obj

// function removeDuplicates(arr) {
//   let uniqueElements = {};
//   let uniqueArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueElements[arr[i]]) {
//       uniqueElements[arr[i]] = true;
//       uniqueArray.push(arr[i]);
//     }
//   }

//   return uniqueArray;
// }

//using Filter method

// function removeDuplicates(arr) {
//   const result = arr.filter((elmt, index) => arr.indexOf(elmt) === index);

//   return result;
// }

// const arr = [1, 2, 2, 3, 3, 4, 5, 5];

// const result = removeDuplicates(arr);

// console.log(result);

//5.Finding the  second largest Element in an Array
//using sort method
// function secondLargest(arr) {
//   const result = arr.sort((a, b) => b - a);
//   return result[1];
// }

// function secondLargest(arr) {
//   if (arr.length < 2) {
//     return console.log("array doesn't meet the length");
//   }

//   let largest = -Infinity; //smallest possible value
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     let currentItem = arr[i];
//     if (currentItem > largest) {
//       secondLargest = largest;
//       largest = currentItem;
//     } else if (currentItem > secondLargest && currentItem < largest) {
//       secondLargest = currentItem;
//     }
//   }

//   return secondLargest;
// }

// const arr = [2, 3, 5, 77, 88];
// const result = secondLargest(arr);
// console.log(result);

//6.Find the missing number in an array containing 1 to N;

// function missingNo(arr) {
//   let n = arr.length + 1;
//   let sum = (n * (n + 1)) / 2;

// let actualSum = 0;
// for (let i = 0; i < arr.length; i++) {
//   actualSum += arr[i];
// }

//   const actualSum = arr.reduce((acc, curr) => (acc += curr));

//   let missingNumber = sum - actualSum;

//   return missingNumber;
// }

//7.Merge two sorted Array into Single sorted array;

//merging algorithm //merge sort.

function mergeTwoArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  return mergedArray;
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];

const result = mergeTwoArrays(arr1, arr2);

console.log(result);
