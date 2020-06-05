// Define lastIndexOf function that takes array and value as parameters and return the last index of the last time the value occurs in the array. If the value never occurs, the function should return -1.

const lastIndexOf = function (array, value) {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      newArray.push(i)
    }
  }

  if (newArray.length > 0) {
    return newArray[newArray.length - 1]
  } else {
    return -1
  }
}



//test
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);