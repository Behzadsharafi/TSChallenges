"use strict";
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Object.defineProperty(exports, "__esModule", { value: true });
exports.narcissistic = exports.descendingOrder = void 0;
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
const descendingOrder = (n) => {
    return parseInt(n.toString().split("").sort().reverse().join(""));
};
exports.descendingOrder = descendingOrder;
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcissistic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
// This may be True and False in your language, e.g. PHP.
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
//* Note: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
const narcissistic = (value) => value ===
    value
        .toString()
        .split("")
        .reduce((acc, n, _, xs) => acc + parseInt(n) ** xs.length, 0);
exports.narcissistic = narcissistic;
// Task
// Given an integral number, determine if it's a square number.
function isSquare(n) {
    return Number.isInteger(Math.sqrt(n));
}
exports.default = isSquare;
// In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
const squareDigits = (num) => {
    return +num
        .toString()
        .split("")
        .map((n) => Math.pow(+n, 2))
        .join("");
};
