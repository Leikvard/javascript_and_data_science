//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
//Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

//a variable 'flag' equal to false is created first
//apply filter method to arr and once flag is set to true after the first encounter of func returning true, it will not be reset to false
function dropElements(arr, func) {
    let flag = false;
    return arr.filter(elem => {if(func(elem)) {flag = true;} return flag;});
  }