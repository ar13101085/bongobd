/*
There is multiple type solution,like 
1.String char sorting,then equality check;

2.Char counting
example:
first=abca
second=acba;

first['a']=2;
first['b']=1;
first['c']=1;

second['a']=2;
second['b']=1;
second['c']=1;

then check value equality first and second;
if same then this are anagram
otherwise not.

*/


class Anagram{

    isAnagram(firstString="",secondString="") {
        if(firstString.length>0 && secondString.length>0 ){
            
            //First sort string char, then just check equal by value check


            //console.log(firstString.toLowerCase().split("").sort());
            //console.log(secondString.toLowerCase().split("").sort());
            firstString=firstString.toLowerCase().split("").sort();
            secondString=secondString.toLowerCase().split("").sort();
            return  firstString.join("") === secondString.join("") ;
        }else{
            return false;
        }
    }

    constructor(){

    }
}

var anagram=new Anagram();
var firstString="eat";
var secondString="tar";

console.log(anagram.isAnagram(firstString,secondString))