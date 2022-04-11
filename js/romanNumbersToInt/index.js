/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    let romanNum = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    const arrayFromStr = s.split('');

    for(let i = 0; i < arrayFromStr.length; i++) {
        if(romanNum[arrayFromStr[i]] < romanNum[arrayFromStr[i + 1]]) {
            total -= romanNum[arrayFromStr[i]]
        } else {
            total += romanNum[arrayFromStr[i]]
        }
    }

    return total;
};

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('XXI'))
console.log(romanToInt('MXI'))
console.log(romanToInt('MCMXCIV'))
