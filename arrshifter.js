function shiftArray(arr, n) {
  for (let i = n < 0 ? n : 0; i < (n < 0 ? 0 : n); i++) {
    if (i >= 0) {
      const firstEle = arr.shift();
      arr.push(firstEle);
    } else {
      const lastEle = arr.pop();
      arr.unshift(lastEle);
    }
  }
  console.log(arr);
  return arr;
}

shiftArray([1, 2, 3], -1);
shiftArray(["alpha", "bravo", "charlie"], -11);
shiftArray([1, 2, 3], 1);
shiftArray(["alpha", "bravo", "charlie"], 5);
shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15);

/*
Expectation:-
Given an array and an integer representing how many positions to shift the array, return the shifted array.

A positive integer shifts the array to the left.
A negative integer shifts the array to the right.
The shift wraps around the array.
For example, given [1, 2, 3] and 1, shift the array 1 to the left, returning [2, 3, 1].

*/
