function rot13(str) {
    console.log(str.split(''));
    return str
      .split('')
      .map(elem => {
      let regex = /[a-zA-Z]/;
      if (regex.test(elem)) {
        if(regex.test(String.fromCharCode(elem.charCodeAt(0) - 13))) {
          return String.fromCharCode(elem.charCodeAt(0) - 13);
        } else {
          return String.fromCharCode(elem.charCodeAt(0) + 13)
          }
        } else {
        return elem;
        }
      })
      .join('');
  }