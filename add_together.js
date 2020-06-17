//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
function addTogether() {
    let args = Array.prototype.slice.call(arguments);
    console.log(args)
    let len = args.length;
    console.log(len)
    if (args.filter(elem => typeof(elem) == 'number').length < len) {
      return undefined;
    } else if (len == 1) {
      return function(x) {
        if (typeof(x) == 'number') {
          return args[0] + x;
        } else {
          return undefined;
        }
      }
    } else if (len == 2) {
      return args.reduce((accu, elem) => accu + elem);
    }
  }