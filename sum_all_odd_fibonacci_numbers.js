//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
function sumFibs(num) {
    var generateFibs = int => {
      if (int === 1) {
        return [1]
      } else {
        var numArr = [1, 1];
        var i = 1;
        while (numArr[i - 1] + numArr[i] <= int) {
          numArr.push(numArr[i - 1] + numArr[i]);
          ++i;
      }
      return numArr.filter(num => num % 2 === 1);
      }
    }
    return generateFibs(num).reduce((sum, element) => sum + element, 0)
  }
  
  var test1 = sumFibs(4);
  var test2 = sumFibs(1000);
  var test3 = sumFibs(4000000);
  var test4 = sumFibs(1);
  var test5 = sumFibs(75024);
  var test6 = sumFibs(75025);
  console.log(test1, test2, test3, test4, test5, test6);
