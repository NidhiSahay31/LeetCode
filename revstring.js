/**let str= 'hello';

console.log(str.substring(0,str.length-1));

var reverseString = function(s) {
    if(s==="")
    return "";

    return s[s.length-1]+reverseString(s.substring(0,s.length-1));
    
    
    
};
var reverseString1 = function(s) {
    // console.log(s,s[s.length-1])
    
    
    if(s.length==0)
    return "";

    return s[s.length-1]+reverseString1(s.slice(0,s.length-1));
    
};
// console.log(["h","e","l","l","o"].slice(0,4))
*/
var reverseString = function(s) {
    reverse(s, 0, s.length-1);
    return s;
     
 };
 
 var reverse= function(s, start, end){
     if(start >= end)
         return;
     let temp= s[start];
     s[start]= s[end];
     s[end]= temp;
     
     reverse(s, start+1, end-1);
 }
 
console.log(reverseString(["H","a","n","n","a","h"]))
