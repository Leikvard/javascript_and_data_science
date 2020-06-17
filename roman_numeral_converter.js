function convertToRoman(num) {
    let thousands = [0, 'M', 'MM',  'MMM'];
    let hundreds = [0, 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let tens = [0, 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let singles = [0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let thousand = Math.floor(num / 1000);
    let hundred = Math.floor((num - 1000 * thousand) / 100);
    let ten = Math.floor((num - 1000 * thousand - 100 * hundred) / 10);
    let single = num - 1000 * thousand - 100 * hundred - 10 * ten;
    let romanArr = [thousands[thousand], hundreds[hundred], tens[ten], singles[single]];
    return romanArr.filter(elem => elem != 0).join('');
  }