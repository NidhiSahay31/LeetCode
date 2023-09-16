/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    let res = [];
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {

        let mid = ~~((start + end) / 2);
        if (target == nums[mid]) {
            res.push(mid);
            start++;
        }


        else if (target > nums[mid])
            start = mid + 1

        else
            end = mid - 1
    }

    return res.length>0 ? res:[-1,-1];

};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))