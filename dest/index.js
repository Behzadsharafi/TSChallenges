"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSmileys = void 0;
function countSmileys(arr) {
    return arr.filter((x) => x.match(/[:;][-~]?[)D]/)).length;
}
exports.countSmileys = countSmileys;
console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
