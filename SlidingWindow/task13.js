/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    return atmost(nums,goal)-atmost(nums,goal-1)

  
    
};

var atmost= function(nums, goal) {
    let left=0;
    let right=0;
    let sum=0;
    let count=0;
    let arr=[];
    while(right<nums.length)
    {
        arr.push(nums[right]);
        console.log(`========`, arr)
        sum= sum+nums[right];;
        console.log(sum)
        while(sum>goal && left<=right)
        {
            // console.log(`inside while`)
            sum= sum-nums[left];
            // arr= arr.splice(left+1);
            left++;
        }
        count= count+ (right-left);
        right++;
        
    }
    console.log(`count is `)
 return count;
}

let res= numSubarraysWithSum([1,0,1,0,1],2);
console.log(`Result is ==> `,res)