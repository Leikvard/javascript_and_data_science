function smallestCommons(arr) {
    //sort the argument array and get the smaller number (m) and bigger number (n)
    let m = arr.sort((a, b) => a - b)[0];
    let n = arr.sort((a, b) => a - b)[1];
    //create a new 'primes' variable which equals to an array of integers ranging from 2 to n
    let primes = Array.from({length: n + 1}).map((_, i) => i).slice(2);
    //filter 'primes' so that it contains prime number only
    for (let n in primes) {
        primes = primes.filter(num => num == primes[n] || num % primes[n] != 0);
    }
    //create a 'counts' variable which is an array of the same length with 'primes' array filled with 0
    let counts = Array(primes.length).fill(0);
    //prime factorization of integers through m to n
    //update 'counts' array with the highest count of each prime factor 
    for (let index in primes) {
        //prime factorization starts from the smallest prime number
        let prime = primes[index];
        //initialize a 'count' variable equal to 0, reprenting count of the prime number in factorization
        let count = 0;
        //primes factorization starts from number m and increment to n
        for (let j = m; j <= n; j++) {
            //copy j to num so that j will not be changed during the loop
            let num = j;
            //reset count to 0 for each new factorization on a new number
            count = 0;
            //prime factorization on the number 'num'
            while(num % prime == 0) {
                num /= prime;
                count += 1;
            }
            //update 'counts' array with the highest 'count' 
            if (count > counts[index]) {
                counts[index] = count;
            }
        }
    }
    //multiply 'primes' array and 'counts' array to get smallest common multiple
    return primes.reduce(function(multiple, prime, index) {return multiple * (prime ** counts[index]);}, 1)
}
  
  
var test1 = smallestCommons([1,5]);
var test2 = smallestCommons([2, 10]);
var test3 = smallestCommons([1, 13]);
var test4 = smallestCommons([23, 18]);
console.log(test1, test2, test3, test4)
  
  
  