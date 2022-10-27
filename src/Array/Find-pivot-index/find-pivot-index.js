/**
 * https://leetcode.com/problems/find-pivot-index/ 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    
    let sum= nums.reduce((acc,curr)=>{
        return acc+curr
    },0);
     
    let leftsum=0;
    let rightsum= sum;
    for(let i=0;i<nums.length;i++){
        rightsum= rightsum-nums[i];
        if(leftsum==rightsum)
            return i;
        leftsum= leftsum+nums[i];
        
    }
    return -1;
    
    
};