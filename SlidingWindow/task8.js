/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

let k= s1.length;
let ans= '';
let final=false;
for(let i=0;i<k;i++)
{
    ans= ans+s2[i];
}
final= isPalindrome(s1,ans);
if(final)
return final;

for(let i=k;i<s2.length;i++)
{
    ans= ans+s2[i];
    let count= ans.substring((i-k+1));
    // console.log(count);
    final= isPalindrome(s1,count);
if(final)
return final;
}
return final;   
};

var isPalindrome= function(s1,s2){
    s1= s1.split('').sort((a,b)=> a.charCodeAt(0)-b.charCodeAt(0)).join('');
    s2= s2.split('').sort((a,b)=> a.charCodeAt(0)-b.charCodeAt(0)).join('');
    return s1===s2
}

let res= checkInclusion('ba','eidboaoo');
console.log(`Result is ::: `,res)