/**
 * https://leetcode.com/problems/find-the-k-beauty-of-a-number/
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {

    let arr= `${num}`.split('').map(Number);
    console.log(arr);
    let ans=0;
    let sum='';
   

    for(let i=0;i<k;i++)
    {
        sum= sum+arr[i];
    }
    ans= num%sum===0? ans+1: ans;
    // console.log(`Answer is ${ans} and sum is ${sum}`);
    for(let i=k;i<arr.length;i++)
    {
        sum= sum+arr[i];
        let curr = sum.substring((i-k+1));
        // console.log(`Sum is `,sum);
        // console.log(`Current value is `,curr);
        console.log()
        ans= ans= num%curr===0? ans+1: ans;
    }
    return ans;
    
};


let res= divisorSubstrings(100,1);
console.log(`Result is :: `,res);