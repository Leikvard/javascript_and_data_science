//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
    var htmlEntities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;'
    };
    var regex = /[&<>\"\']/g;
    var match = str.match(regex);
    if (match == null) {
        return str;
    } else {
        return str.match(regex).reduce(function(accu, character) {return accu.replace(character, htmlEntities[character]);}, str);
    }
  }
var test1 = convertHTML("Dolce & Gabbana");
var test2 = convertHTML("Hamburgers < Pizza < Tacos");
var test3 = convertHTML("Sixty > twelve");
var test4 = convertHTML('Stuff in "quotation marks"');
var test5 = convertHTML("Schindler's List");
var test6 = convertHTML("<>");
var test7 = convertHTML("abc");
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);
