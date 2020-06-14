//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.

//version description: in this code, a product of all integers ranging between two numbers given in the argument is created first
//then factorize the product until it cannot be further factorized, this is the smallest common multiple then
function smallestCommons(arr) {
    //sort the argument array and get the smaller number (m) and bigger number (n)
    let m = arr.sort((a, b) => a - b)[0];
    if (m == 1) {m = 2;}
    let n = arr.sort((a, b) => a - b)[1];
    //create a new 'factors' variable which equals to an array of integers ranging from 2 to n
    let factors = Array.from({length: n + 1}).map((_, i) => i).slice(2);
    //create a 'numbers' variable equal to a sequence of integers ranging from m to n;
    let numbers = factors.slice(m - 2, n - 1);
    //create a 'product' variable equal to the product of m through n, which may not be the smallest common multiple
    let product = numbers.reduce((accu, val) => accu * val);
    for (let index in factors) {
        let factor = factors[index];
        //if product divided by factor is still a common multiple, divide product by factor to get a smaller common multiple
        while(numbers.reduce((flag, val) => flag && (product / factor) % val == 0, true)) {
            product /= factor;
        }
        //filter away numbers that are multiple of the variable 'product'
        factors = factors.filter(val => val == factor || val % factor != 0);
    }
    return product;
 }
  
  
var test1 = smallestCommons([1,5]);
var test2 = smallestCommons([2, 10]);
var test3 = smallestCommons([1, 13]);
var test4 = smallestCommons([23, 18]);
console.log(test1, test2, test3, test4)
  
  
  