/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length;
    // nums= [...nums, target].sort((a,b) => a-b);
    // console.log(nums)

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        console.log(`middle`,middle)

        if (nums[middle] === target) {
            // found the target
            return middle;
        } else if (nums[middle] < target) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
           
            end = middle - 1;
        }
    }
	// target wasn't found
    console.log(`Start is :: `, start);
    return -1;
    
};

let res= searchInsert([1,3,5,6],0);
console.log(res)