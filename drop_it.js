//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
//Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

//variable 'index' is created equal to the length of array in argument first
//then a for loop is used to iterate through each element of the array until the first element that fullfill then argument function is met, then index is updated to the index of this first element

function dropElements(arr, func) {
    let index = arr.length;
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])){
        index = i;
        break;
      }
    }
    return arr.slice(index);
  }