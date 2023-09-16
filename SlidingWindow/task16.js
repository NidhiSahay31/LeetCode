/**
 * @param {number[]} fruits
 * @return {number}
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
 */
var totalFruit = function(nums) {
    let left=0;
    let right=0;
    let sum=0;
    let count=0;
    let arr=[];
    let max=0;
    let maxarr=[];
    while(right<nums.length)
    {
        arr.push(nums[right]);
        console.log(`Arr is `,arr)
        // console.log(arr.filter(obj=> obj===0));
        // console.log(`==================`);
        right++;
        while(arr.filter(obj=> obj===0).length>1 && left<=right)
        {
            //decrement
            arr= arr.splice(left+1)
            console.log(`inside inner while`,arr);
            left++;
        }

        if(max<arr.length)
        {
            max=arr.length;
            maxarr= arr;
        }
        
        count= count+ (right-left);
        //console.log('Arr is now', arr);
        // arr=[];
        
    }
    console.log(`count is `,max);
    console.log(maxarr);
 return count;
   
};

let res= totalFruit([1,1,0,1])