function smallestCommons(arr) {
    let m = arr.sort((a, b) => a - b)[0];
    let n = arr.sort((a, b) => a - b)[1];
    let primes = Array.from({length: n + 1}).map((_, i) => i).slice(2);
    for (let n in primes) {
      primes = primes.filter(num => num == primes[n] || num % primes[n] != 0);
    }
    let count = [];
    for (let i = 0; i < primes.length; i++) {count.push(0);}
    for (let index in primes) {
      let prime = primes[index];
      for (let j = m; j <= n; j++) {
        let num = j;
        let k = 0;
        while(num % prime == 0) {
          num = num / prime;
          k = k + 1;
        }
        if (k > count[index]) {
          count[index] = k;
        }
      }
    }
    let result = 1;
    for (var index = 0; index < primes.length; index++) {
      if (count[index] != 0) {
        result *= primes[index] ** count[index];
      }
    }
    return result;
  }
  
  
  var test1 = smallestCommons([1,5]);
  var test2 = smallestCommons([2, 10]);
  var test3 = smallestCommons([1, 13]);
  var test4 = smallestCommons([23, 18]);
  console.log(test1, test2, test3, test4)
  
  
  