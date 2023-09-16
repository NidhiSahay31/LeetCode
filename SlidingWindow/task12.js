/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    let arr=[];
    let str= s.substring(0,k);
    let set= new Set(str);
    if(set.size === k)
    arr.push(str);

    for(let i=k;i<s.length;i++)
    {
        let str1= str.substring(i-k+1);
        str1= str1+s[i];
        str= str+s[i];
        // console.log(str1);
        set= new Set(str1);
        
    if(set.size === k)
    arr.push(str1);

    }

    return arr;

    
};

let res= numKLenSubstrNoRepeats('havefunonleetcode',5);

console.log(`Result is =>`,res);