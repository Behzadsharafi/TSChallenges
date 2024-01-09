"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayDiff = void 0;
function arrayDiff(a, b) {
    return a.filter((x) => !b.includes(x));
}
exports.arrayDiff = arrayDiff;
console.log(arrayDiff([1, 2], [2]));
