//Return an English translated sentence of the passed binary string.
//The binary string will be space separated.
function binaryAgent(str) {
    return str
        .split(' ')
        .reduce((accu, elem) => accu + String.fromCharCode(parseInt(elem, 2)), '')
    //or alternatively
    return str.split(' ').map(elem => String.fromCharCode(parseInt(elem, 2))).join('');
  }