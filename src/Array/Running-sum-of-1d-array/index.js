/**
 * https://leetcode.com/problems/running-sum-of-1d-array/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    
    var result=[];
    let sum=0;
    
    for(let i=0;i<nums.length;i++)
        {
            sum= sum+nums[i];
            result.push(sum);
            
        }
    return result;
    
};
console.log('here');
let result= runningSum([1,2,3,4]);
console.log(`result is ::`, result);