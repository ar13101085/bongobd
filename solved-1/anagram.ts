export default class Anagram{

    isAnagram(firstString:string="",secondString:string=""):boolean {
        if(firstString.length>0 && secondString.length>0 ){

            //First sort string char, then just check equal by value check

            let firstSortedString=firstString.toLowerCase().split("").sort();
            let secondSortedString=secondString.toLowerCase().split("").sort();
            let isEqual=firstSortedString.join("")==secondSortedString.join("") ;
            return isEqual;
        }else{
            return false;
        }
    }
}