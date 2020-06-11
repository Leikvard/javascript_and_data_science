//freeCodeCamp Javascript Algorithms and Data Structures Certification
//Intermediate Algorithm Scripting
//Missing letter challenge
//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.
function fearNotLetter(str) {
    var start = str.charCodeAt(0) ;
    var end = str.charCodeAt(str.length - 1);
    var compareArr = [];
    for (var i = start; i <= end; i++) {
        compareArr.push(String.fromCharCode(i));
    }
    return compareArr.filter(char => str.split('').indexOf(char) === -1)[0];
}
var test1 = fearNotLetter('abce');
var test2 = fearNotLetter('abcdefghjklmno');
var test3 = fearNotLetter('stvwx');
var test4 = fearNotLetter('bcdf');
var test5 = fearNotLetter('abcdefg');
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
  