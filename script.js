function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let romanNumeral = '';

  for (let key in obj) {
    const [symbol, value] = obj[key];
    while (num >= value) {
      romanNumeral += symbol;
      num -= value;
    }
  }

  // Handle special cases like subtractive notation (e.g., 4, 9, 40, 90, etc.)
  romanNumeral = romanNumeral
    .replace('DCCCC', 'CM')
    .replace('CCCC', 'CD')
    .replace('LXXXX', 'XC')
    .replace('XXXX', 'XL')
    .replace('VIIII', 'IX')
    .replace('IIII', 'IV');

  return romanNumeral;
}

// You can test the function by running it with different inputs and printing the results to the console
console.log(convertToRoman(14)); // XIV
console.log(convertToRoman(798)); // DCCXCVIII
console.log(convertToRoman(36)); // XXXVI

// Do not edit below this line
module.exports = convertToRoman;
