"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var anagram_1 = __importDefault(require("./anagram"));
var anagram = new anagram_1.default();
var firstString = "abcd";
var secondString = "cdab";
var isAnagram = anagram.isAnagram(firstString, secondString);
console.log(isAnagram);
//# sourceMappingURL=index.js.map