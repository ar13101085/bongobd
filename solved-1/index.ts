import Anagram from "./anagram";

var anagram:Anagram=new Anagram();
var firstString="abcd";
var secondString="cdab";
let isAnagram=anagram.isAnagram(firstString,secondString);
console.log(isAnagram);