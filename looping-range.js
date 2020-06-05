const range = function (start, end, step) {
  let array = []
  let element = 0
  let counter = 0

  if (start < end && step > 0) { 
    counter = (end - start) / step;
    counter = counter.toFixed(0);

    array.push(start);

    element = start;

    for (let i = 0; i < counter; i++) {

      element = element + step; 
      array.push(element);
    }  
  }
  return array;
}




console.log(range(0, 10, 2)); // should return [ 0, 2, 4, 6, 8, 10 ]
console.log(range(10, 30, 5)); // should return [ 10, 15, 20, 25, 30 ]
console.log(range(-5, 2, 3)); // should return [ -5, -2, 1 ]
console.log(range(10, 0, 1)); // should return just empty array
console.log(range(0, 10, -5)); // should return just empty array