//Return true if the given string is a palindrome. Otherwise, return false.
//You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

function palindrome(str) {
    let regex = /[a-zA-Z0-9]/g;
    let charArr = str.toLowerCase().match(regex);
    let len = charArr.length;
    console.log(charArr.map((elem, idx, self) => self[len - 1 - idx]).join(''));
    return charArr.map((elem, idx, self) => self[len - 1 - idx]).join('') == charArr.join('');
  }