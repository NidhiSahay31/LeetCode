/**
 * https://leetcode.com/problems/count-the-number-of-good-subarrays/
 */

var countGood = function(nums, k) {
    let right=0;
    let left=0;
    let map= new Map();
    let count=0;
    let ans=0;

    while(right<nums.length)
    {
      
       map.set(nums[right], map.get(nums[right])+1||1);
       count= count+ map.get(nums[right])-1;

        while(count>=k)
        {
            console.log(`right is `,right)
            ans= ans+ (nums.length-right);
            // console.log(map);
            console.log(`Ans is`,ans)
            count= count-(map.get(nums[left])-1);
            let lf= map.get(nums[left]);
            map.set(nums[left],lf-1);
            if(map.get(nums[left])==0)
            {
                map.delete(nums[left])
            }
            left++;
        }
       right++;
       console.log(map);
    // console.log(`Ans is`,ans)


    }
    return ans;
    
};


let res= countGood([2,1,3,1,2,2,3,3,2,2,1,1,1,3,1],11);
console.log(`res is `,res)