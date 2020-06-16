//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    return arr.reduce((accu, elem) => {
      if(Array.isArray(elem)) {
        return accu.concat(steamrollArray(elem));
      } else {
        return accu.concat(elem);
      }
    }, []);
  }