//write sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
function sumPrimes(num) {
    let numbers = [];
    for (var i = 2; i <= num; i++) {numbers.push(i);}
    let primes = [];
    while (numbers[0] <= num) {
        primes.unshift(numbers[0]);
        numbers = numbers.filter(element => element % primes[0] !== 0);
    }
    return primes.reduce((sum, element) => sum + element, 0);
  }
  
  var test1 = sumPrimes(10);
  var test2 = sumPrimes(977);
  console.log(test1, test2);
