"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Anagram = /** @class */ (function () {
    function Anagram() {
    }
    Anagram.prototype.isAnagram = function (firstString, secondString) {
        if (firstString === void 0) { firstString = ""; }
        if (secondString === void 0) { secondString = ""; }
        if (firstString.length > 0 && secondString.length > 0) {
            //First sort string char, then just check equal by value check
            var firstSortedString = firstString.toLowerCase().split("").sort();
            var secondSortedString = secondString.toLowerCase().split("").sort();
            var isEqual = firstSortedString.join("") == secondSortedString.join("");
            return isEqual;
        }
        else {
            return false;
        }
    };
    return Anagram;
}());
exports.default = Anagram;
//# sourceMappingURL=anagram.js.map