module.exports = function toReadable(x) {
    let numbersArr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        ,
        ,
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    for (i = 2; i < 10; ++i) {
        numbersArr[10 * i] = tens[i];
        for (j = 1; j < 10; ++j) {
            numbersArr[10 * i + j] = tens[i] + " " + numbersArr[j];
        }
    }

    if (x < 100) {
        return numbersArr[x];
    }
    for (i = 1; i < 10; ++i) {
        numbersArr[100 * i] = numbersArr[i] + " hundred";
        for (p = 1; p < 100; ++p) {
            numbersArr[100 * i + p] = numbersArr[100 * i] + " " + numbersArr[p];
        }
    }
    return numbersArr[x];
};
