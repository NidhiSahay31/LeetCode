/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {

    nums.sort((a,b)=> a-b);
    let i=0;
    let j= nums.length-1;
    let res=-1;
    while(i<j)
    {
        let sum = nums[i]+nums[j];
        console.log(sum)
        if(sum<k)
        {
            i++;
            if(sum>res)
           res= sum;
        }
        else 
        {
            j--;
        }
    }
    return res;    
};

let res= twoSumLessThanK([100],200);
console.log(res)