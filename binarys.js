/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start= 0;
    let end= nums.length-1;
   
   

    while(start<=end)
    {
        let mid= ~~((start+end)/2);
        console.log('Mid id', mid)
        
        if (target == nums[mid])
                   return mid
   
      else if (target > nums[mid])
        start = mid + 1
   
        else                 
         end = mid - 1

      
    }
    return -1;
    
}

console.log(search([-1,0,3,5,9,12],3))