/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let sortedarr=[];
    nums= nums.sort((a,b)=> b-a);
    // nums.map(obj=>{

    //     if(!sortedarr.find(elm=> elm==obj))
    //     sortedarr.push(obj)
    // });
    console.log(sortedarr);
    return nums[k-1]

};

let res= findKthLargest([3,2,3,1,2,4,5,5,6],4);
console.log(`Result is ==>`,res);